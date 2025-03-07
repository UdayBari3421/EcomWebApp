const UpdateOrder = () => {
  return (
    <div className="text-2xl">
      <h2>Update Order</h2>
      <form>
        <div>
          <label htmlFor="orderId">Order ID</label>
          <input type="text" id="orderId" />
        </div>
        <div>
          <label htmlFor="orderStatus">Order Status</label>
          <input type="text" id="orderStatus" />
        </div>
      </form>
    </div>
  );
};
export default UpdateOrder;
