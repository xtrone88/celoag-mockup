import Assets from "../assets/assets";

type contentProps = {
    id?: string;
    header: String;
    content: String;
};

const Abstract = ({id, header, content}: contentProps) => {
    return (
        <>
            <div id={id} className="grid bg-gray text-center px-10 md:px-40 lg:px-60 xl:px-96 pt-12 md:pt-24">
                <div className="text-3xl md:text-6xl py-5 font-mont-semibold">{header}</div>
                <div className="pb-5 justify-self-center"><img src={Assets.images.imgLine} alt="line" /></div>
                <div className="text-md pt-4 pb-12 md:pb-24">{content}</div>
            </div>
        </>
    );
};

export default Abstract;