import UserForm from "@/components/forms/UserForm"

import ItemsCartContainer from "@/components/shared/ItemsCartContainer";


function Checkout() {

  return (
    <div className="common-container">
          <ItemsCartContainer/>
          <UserForm/>
    </div>
  )
}

export default Checkout