import SectionTitle from "../../components/SectionTitle/SectionTitle";
import featuredImg from '../../assets/home/featured.jpg';
import '../Home/Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed   text-white  my-20">
            <div className="bg-slate-800 bg-opacity-50 pt-8">
                <SectionTitle subHeading={"check it out"} heading={"Featured Item"}></SectionTitle>
                <div className="  md:flex justify-center items-center px-36 pb-20 pt-12">
                    <div>
                        <img src={featuredImg} alt="" />
                    </div>
                    <div className="md:ml-10">
                        <p>Aug 20, 2029</p>
                        <p className="uppercase">Where can I get some?</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim repellendus sit eum sint ipsa vitae officiis repudiandae magnam nam odit ullam magni numquam quia sequi soluta asperiores, saepe, molestias blanditiis.</p>
                        <button className="btn btn-outline border-0 border-b-4">Read More</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Featured;