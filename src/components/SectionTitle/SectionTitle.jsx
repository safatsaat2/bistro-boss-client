
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center my-8 md:w-3/12 ">
            <p className="mb-2 text-yellow-600">--- {subHeading} ---</p>
            <h3 className="text-3xl uppercase border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;