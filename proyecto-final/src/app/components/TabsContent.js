"use client"
import Image from "next/image";
import { useEffect,useState } from "react";
import style from './TabsContent.module.css';
function TabContent({ image }) {
 
    const [ima1, setImg1] = useState("/bussiness_man.png");
    const [ima2, setImg2] = useState("/bussiness_man.png");
    const [ima3, setImg3] = useState("/pictures_wall.jpeg")
    const [ima4, setImg4] = useState("/kitchen.jpeg")
    const [ima5, setImg5] = useState("/mobile_app.png")
    const [ima6, setImg6] = useState("/issima_page.png")
    const [ima7, setImg7] = useState("/vinculante.png")
    return (
        <div className={style.contenedor} id="main-content">
            <div className={style.rectangulo}>
                <div className={style.imagen}>
                    <div className={style.imageContainer}>
                        <Image src={ima1} alt="github" width={362} height={226}/>
                    </div>
                    <div className={style.imageContainer}>
                        <Image src={ima2} alt="github" width={362} height={226}/>
                    </div>
                    <div className={style.imageContainer}>
                        <Image src={ima3} alt="github" width={362} height={226}/>
                    </div>
                    <div className={style.imageContainer}>
                        <Image src={ima4} alt="github" width={362} height={226}/>
                    </div>
                    <div className={style.imageContainer}>
                        <Image src={ima5} alt="github" width={362} height={226}/>
                    </div>
                    <div className={style.imageContainer}>
                        <Image src={ima6} alt="github" width={362} height={226}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TabContent;
