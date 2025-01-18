import { useState } from "react";
import Input from "../ui/input";
import Label from "../ui/label";
import { cloudImageUpload } from "../../utils/utils";
import { useDispatch } from "react-redux";
import { update } from "../../store/features/productApiSlice";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { activeLoading } from "../../store/features/productSlice";
import { Loader } from "lucide-react";
import { useEffect } from "react";

const UpdateForm = ({ handleToggle, formValue }) => {
  const { loading } = useSelector((state) => state.product);
  const [formData, setFormData] = useState({ ...formValue });
  const [productPhoto, setProductPhoto] = useState(null);
  const dispatch = useDispatch();

  // Update form state on input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate environment variables
    if (
      !import.meta.env.VITE_CLOUDINARY_UPLOAD_NAME ||
      !import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
    ) {
      Swal.fire({
        icon: "error",
        title: "Cloudinary Configuration Missing",
        text: "Please check your environment variables.",
      });
      return;
    }

    // Validate required fields
    if (!formData.name || formData.price < 0 || formData.qty < 0) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Author name and post details are required.",
      });
      return;
    }

    dispatch(activeLoading());

    // Initialize URLs with existing values
    let PhotoUrl = formValue?.image || null;

    try {
      // Handle product photo upload
      if (productPhoto) {
        const avatarData = await cloudImageUpload({
          file: productPhoto,
          cloudName: import.meta.env.VITE_CLOUDINARY_UPLOAD_NAME,
          preset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
        });
        PhotoUrl = avatarData?.secure_url;
      }

      // Validate URLs
      if (!PhotoUrl) {
        Swal.fire({
          icon: "error",
          title: "Image Upload Error",
          text: "Failed to upload images.",
        });
        return;
      }

      // Dispatch update or create post action
      dispatch(
        update({
          ...formValue,
          ...formData,
          image: PhotoUrl,
          updatedAt: Date.now(),
        })
      );
      // Reset form and close modal
      setFormData({ ...formValue });
      handleToggle();
      Swal.fire({
        title: "Submission Done!",
        icon: "success",
      });
      e.target.reset();
    } catch (error) {
      console.error("Error during submission:", error);
      Swal.fire({
        icon: "error",
        title: "Submission Error",
        text: "An error occurred while processing your request.",
      });
    }
  };
  useEffect(() => {
    setFormData({ ...formValue });
  }, [formValue]);

  return (
    <>
      <div className="w-full max-w-md rounded-lg bg-zinc-900">
        <form className="w-full space-y-6 text-left" onSubmit={handleSubmit}>
          {/*Product Name Input */}
          <div className="space-y-2 text-sm text-zinc-400">
            <Label label="Product Name" name="name" />
            <Input
              type="text"
              name="name"
              placeholder="Product Name"
              onChange={handleChange}
              value={formData.name}
            />
          </div>

          {/* Image Upload */}
          <div className="space-y-2 text-sm text-zinc-400">
            <Label label="Product Image" name="authorPhoto" />
            <input
              type="file"
              name="authorPhoto"
              onChange={(e) => setProductPhoto(e.target.files[0])}
            />
          </div>

          {/* product price input */}
          <div className="space-y-2 text-sm text-zinc-400">
            <Label label="Product Price" name="price" />
            <Input
              type="number"
              name="price"
              onChange={handleChange}
              value={formData.price}
            />
          </div>

          {/* product quantity input */}
          <div className="space-y-2 text-sm text-zinc-400">
            <Label label="Product Quantity" name="qty" />
            <Input
              type="number"
              name="qty"
              onChange={handleChange}
              value={formData.qty}
            />
          </div>

          {/* product Publish status */}
          <div className="space-y-2 text-sm text-zinc-400">
            <Label label="published" name="published" />
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                id="published"
                value={formData.published}
                onChange={handleChange}
                checked={formData.published}
                name="published"
                className="sr-only peer"
              />
              <div className="group peer ring-0 bg-gradient-to-tr from-rose-100 via-rose-400 to-rose-500 rounded-full outline-none duration-300 after:duration-300 w-24 h-12 shadow-md peer-checked:bg-emerald-500  peer-focus:outline-none  after:content-['✖️']  after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-10 after:w-10 after:top-1 after:left-1 after:-rotate-180 after:flex after:justify-center after:items-center peer-checked:after:translate-x-12 peer-checked:after:content-['✔️'] peer-hover:after:scale-95 peer-checked:after:rotate-0 peer-checked:bg-gradient-to-tr peer-checked:from-green-100 peer-checked:via-lime-400 peer-checked:to-lime-500"></div>
            </label>
          </div>

          {/* Submit Button */}
          <button
            disabled={loading}
            className="rounded-md px-4 py-2 text-white transition-colors hover:bg-orange-600 bg-orange-700"
          >
            {loading ? (
              <span className="flex justify-center items-center">
                Processing...
                <Loader className="size-6 animate-spin text-white" />
              </span>
            ) : (
              "Done"
            )}
          </button>
        </form>
      </div>
    </>
  );
};
UpdateForm.propTypes = {
  handleToggle: PropTypes.func,
  formValue: PropTypes.object,
};
export default UpdateForm;
