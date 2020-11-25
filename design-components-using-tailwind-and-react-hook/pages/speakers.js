import Header from "../src/components/Header/Header";
import React from "react";
import Menu from "../src/components/Menu/Menu";
import SpeakerSearchBar from "../src/components/SpeakerSearchBar/SpeakerSearchBar";
import Footer from "../src/components/Footer/Footer";
import SpeakersHoc from "../src/components/SpeakersHoc/SpeakersHoc";
import SpeakersProps from "../src/SpeakersProps/SpeakersProps";

function Page() {
    return (
        <div>
            <Header />
            <Menu />
            <SpeakerSearchBar />
            <SpeakersHoc />
            <SpeakersProps />
            <Footer/>
        </div>
    );
}
export default Page;
