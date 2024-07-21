import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice ";
import { IoIosAddCircle } from "react-icons/io";
import { MdAutoDelete } from "react-icons/md";

const HomeItems = ({ item }) => {
  const dispatch = useDispatch();
  const bagItem = useSelector((store) => store.bag);
  const elementFound = bagItem.indexOf(item.id) >= 0;

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };
  const handleRemove = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        {elementFound ? (
          <button
            type="button"
            className="btn btn-danger btn-add-bag"
            onClick={handleRemove}
          >
            <MdAutoDelete />
            Remove From Bag
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-success btn-add-bag"
            onClick={handleAddToBag}
          >
            <IoIosAddCircle />
            Add to Bag
          </button>
        )}
      </div>
      `
    </>
  );
};
export default HomeItems;
