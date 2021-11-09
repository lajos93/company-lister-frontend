import "./ItemDetail.scss";

const ItemDetail = (props) => {
  return (
    <>
      {props.selectedItem && (
        <div className="itemDetail">
          <span>
            {console.log(
              !!props.selectedItem.siteURL,
              !props.selectedItem.siteURL
            )}
            {props.selectedItem.name}
            <br />
            {props.selectedItem.address.city}
            <br />
            {props.selectedItem.address.street}
            <br />
            Website:
            {props.selectedItem.siteURL
              ? props.selectedItem.siteURL
              : " Not found"}
          </span>
        </div>
      )}
    </>
  );
};

export default ItemDetail;
