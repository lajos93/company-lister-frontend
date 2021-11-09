import ItemNoWebsite from "../../../UI/Icons/Item/ItemNoWebsite/ItemNoWebsite";
import ItemWebsite from "../../../UI/Icons/Item/ItemWebsite/ItemWebsite";

const ItemSingular = (props) => {
  return (
    <>
      {!!props.details.siteURL && <ItemWebsite />}
      {!props.details.siteURL && <ItemNoWebsite />}
    </>
  );
};

export default ItemSingular;
