// CryptoPaymentsForm.tsx
import  React  from  'react'

const  CryptoPaymentsForm = () => {

return (

	<div>

		<input  type="number"  placeholder="Amount"  />

		<input  placeholder="Destination address"  />

		<button  className="col-12 btn btn-primary">

			Send Payment

		</button>

	</div>

)

}

export  default  CryptoPaymentsForm
