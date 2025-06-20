import Emp_img from "../../../assets/card_employees/emp-card"


function Emp_card(){
    return(
        <div className="flex flex-row ">
            <div className="grid grid-cols-2 grid-rows-2 gap-2 items-center">
                <Emp_img/>
                <p>Evan Yates</p>
                <a href="mailto:example@example.com">example@example.com</a>
            </div>
            <div>
                <p>Gender</p>
                <p>F</p>
            </div>
            <div>
                <p>Birthday</p>
                <p>11</p>
            </div>
            <div>
                <p>Full age</p>
                <p>23</p>
            </div>
            <div>
                <p>Position</p>
                <p>Ui</p>
            </div>
        </div>
    )
}


export default Emp_card

