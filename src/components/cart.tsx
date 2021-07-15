import Assets from "../assets/assets";
import { Link } from "react-router-dom";

type cartProps = {
    index: Number,
    title: String,
    location: String,
    content: String,
}

const Cart = ({ index, title, location, content }: cartProps) => {
    return (
        <>
            <div className="flex flex-col justify-between transition delay-150 duration-300 ease-in-out transform hover:scale-105 m-4 p-6 bg-white cart-width">
                <div className="font-mont-bold text-2xl py-5">{title}</div>
                <div className="flex flex-row px-2 pb-5">
                    <img src={Assets.images.imgLocation} alt="Location" />
                    <div className="text-lg">{location}</div>
                </div>
                <div className="text-md pb-5">{content}</div>
                <Link
                    to={{
                        pathname: "/careerpart",
                        id: index
                    }}
                    className="w-full py-7 block bg-indigo-800 text-white font-monti-semibold text-lg text-center"
                >
                    Details</Link>
            </div>
        </>
    );
};

export default Cart;