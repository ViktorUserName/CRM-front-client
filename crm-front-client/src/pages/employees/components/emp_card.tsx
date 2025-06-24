import Emp_img from "../../../assets/card_employees/emp-card"

interface IEmp_card {
    name: string;
    gmail: string;
    gender: string;
    birthday: Date;
    age: number;
    position: string
}

function Emp_card({ name, gmail, gender, birthday, age, position }: IEmp_card){
    return(
        <div className="flex flex-row w-[100%] max-w-6xl justify-between bg-white rounded-2xl">
            <div className="grid [grid-template-columns:50px_1fr] grid-rows-2 items-center py-5 pl-5 w-[300px] gap-x-4">
                <Emp_img className="row-span-2 col-start-1 max-w-[50px]" />
                <p className="font-bold text-[#0A1629] text-[1rem]">{name}</p>
                <a href="mailto:example@example.com" className="text-[0.8rem] text-[#91929E]">{gmail}</a>
            </div>
            <div className="py-5">
                <p>Gender</p>
                <p>{gender}</p>
            </div>
            <div className="py-5">
                <p>Birthday</p>
                <p>{birthday.toLocaleDateString()}</p>
            </div>
            <div className="py-5">
                <p>Full age</p>
                <p>{age}</p>
            </div>
            <div className="py-5 pr-5">
                <p>Position</p>
                <p>{position}</p>
            </div>
        </div>
    )
}


export default Emp_card

