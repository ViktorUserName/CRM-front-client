import Emp_card from "./components/emp_card"

function Employees(){

    const dummyEmployee = {
        name: "Evan Yates",
        gmail: "evan@example.com",
        gender: "male",
        birthday: new Date("1990-01-01"),
        age: 33,
        position: "Manager",
    };

    return (
        <div>
            <div className="flex flex-row justify-between mb-7">
                <h1 className="font-bold text-4xl">Employees</h1>
                <div className="flex gap-5">
                    <button className="bg-white p-3 rounded-2xl hover:bg-gray-100 cursor-pointer">ff</button>
                    <button className="w-max-[180px] py-5 px-5 text-white bg-[#3F8CFF] rounded-2xl hover:bg-[#4c3fff] cursor-pointer">+ Add Employee</button>
                </div>
            </div>
            <Emp_card {...dummyEmployee}/>
        </div>
    )
}

export default Employees