import { useDispatch, useSelector } from "react-redux";
import PlaceholderImage from "../../../assets/images/placeholder.svg";
import { Pencil, Trash2 } from "lucide-react";
import PropTypes from "prop-types";
import useToggler from "../../../hooks/useToggler";
import Modal from "../../../components/shared/modal";
import { Fragment, useState } from "react";
import Swal from "sweetalert2";
import { remove } from "../../../store/features/productApiSlice";
const ProductTable = ({ searchTerm }) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  const [productId, setProductId] = useState();

  const { handleToggle, open } = useToggler();

  const filteredProducts = products?.filter((product) =>
    product.name.toLowerCase().includes(searchTerm?.toLowerCase())
  );
  const handleDelete = (id) => {
    Swal.fire({
      title: "Do you want to Delete This Product?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes, Delete",
      denyButtonText: `Don't Delete`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(remove(id));
        Swal.fire("Deleted!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Product is not Deleted", "", "info");
      }
    });
  };
  return (
    <>
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Photo
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Published
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Available
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Fragment key={product.id}>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img
                        src={product.image || PlaceholderImage}
                        alt={product.name}
                        className="w-16 h-16 rounded object-cover"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {product.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {product.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {product.published ? "true" : "false"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {product.qty}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => {
                          setProductId(product.id);
                          handleToggle();
                        }}
                        className="text-indigo-600 hover:text-indigo-900 mr-2"
                      >
                        <Pencil className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                  <Modal
                    open={open}
                    handleToggle={handleToggle}
                    formValue={filteredProducts.find(
                      (post) => post.id === productId
                    )}
                  />
                </Fragment>
              ))
            ) : (
              <tr>
                <td
                  className="px-6 py-4 whitespace-nowrap text-center"
                  colSpan={6}
                >
                  No Data Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

ProductTable.propTypes = {
  searchTerm: PropTypes.string,
};

export default ProductTable;
