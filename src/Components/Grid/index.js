import React from 'react';
import { Container } from 'react-bootstrap';
import "./styles.css"

const imgArr = ["https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png", "https://www.click2houston.com/resizer/HKQAeI7i5nJAHlNtOZep7qxLpkM=/1600x1066/smart/filters:format(jpeg):strip_exif(true):strip_icc(true):no_upscale(true):quality(65)/cloudfront-us-east-1.images.arcpublishing.com/gmg/7CO7JEH4HZH5FML4JD6OCGMCLU.jpg", "https://www.comfortzone.com/-/media/Images/ComfortZone-NA/US/Blog/bl_necessarysuppliestohavebeforeyoubringyournewcathome_ts-637110224.png?h=450&la=en&w=721&hash=8CB8EEED1E8EE8BFD140C3120C94BB49A40FA0B0", "https://cdn2.thecatapi.com/images/axVOf2ZQm.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8XIsgDcLWS6cB6ylgTMWdzc-j6zeXPiiFoQ&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDxAx6tmkTvLwuac-nUSBFrYJHXiy5QEdLxw&usqp=CAU", "https://www.bluecross.org.uk/sites/default/files/d8/assets/images/118809lprLR.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyczSPCVvEhLlnXLec6oVCBC0_hATTTzYpmQ&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp-PNoawijGq4G0RZjcBxEVcBX55l0WKuU-g&usqp=CAU", 
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4BVS72xFDN1N6ZggWEPvESdZOIV0Z07PyxA&usqp=CAU", "https://i.guim.co.uk/img/media/7d04c4cb7510a4bd9a8bec449f53425aeccee895/289_287_1442_866/master/1442.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=6b7cb2d2ab7847fb0623d2757c1260ba", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfLIncDU2Xolk1F408DYYeRf7xOKzdvMpSmA&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT75UYZua5O9epTKs-03sG21nBv6OEa3On2wg&usqp=CAU", "https://images.theconversation.com/files/323930/original/file-20200330-146712-1fsv5cs.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd9gOInQr6NvTh4X2jv7vwSCyOYCN5VJND6A&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2wCaFx79e9zx3_He1KtpdvC7V5zyKCRtoMw&usqp=CAU", "https://upload.wikimedia.org/wikipedia/commons/7/7d/Wildlife_at_Maasai_Mara_%28Lion%29.jpg", "https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2019/10/giant-panda-750x400.jpg", 
"https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png", "https://www.click2houston.com/resizer/HKQAeI7i5nJAHlNtOZep7qxLpkM=/1600x1066/smart/filters:format(jpeg):strip_exif(true):strip_icc(true):no_upscale(true):quality(65)/cloudfront-us-east-1.images.arcpublishing.com/gmg/7CO7JEH4HZH5FML4JD6OCGMCLU.jpg", "https://www.comfortzone.com/-/media/Images/ComfortZone-NA/US/Blog/bl_necessarysuppliestohavebeforeyoubringyournewcathome_ts-637110224.png?h=450&la=en&w=721&hash=8CB8EEED1E8EE8BFD140C3120C94BB49A40FA0B0", "https://cdn2.thecatapi.com/images/axVOf2ZQm.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8XIsgDcLWS6cB6ylgTMWdzc-j6zeXPiiFoQ&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDxAx6tmkTvLwuac-nUSBFrYJHXiy5QEdLxw&usqp=CAU", "https://www.bluecross.org.uk/sites/default/files/d8/assets/images/118809lprLR.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyczSPCVvEhLlnXLec6oVCBC0_hATTTzYpmQ&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp-PNoawijGq4G0RZjcBxEVcBX55l0WKuU-g&usqp=CAU", 
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4BVS72xFDN1N6ZggWEPvESdZOIV0Z07PyxA&usqp=CAU", "https://i.guim.co.uk/img/media/7d04c4cb7510a4bd9a8bec449f53425aeccee895/289_287_1442_866/master/1442.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=6b7cb2d2ab7847fb0623d2757c1260ba", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfLIncDU2Xolk1F408DYYeRf7xOKzdvMpSmA&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT75UYZua5O9epTKs-03sG21nBv6OEa3On2wg&usqp=CAU", "https://images.theconversation.com/files/323930/original/file-20200330-146712-1fsv5cs.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd9gOInQr6NvTh4X2jv7vwSCyOYCN5VJND6A&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2wCaFx79e9zx3_He1KtpdvC7V5zyKCRtoMw&usqp=CAU", "https://upload.wikimedia.org/wikipedia/commons/7/7d/Wildlife_at_Maasai_Mara_%28Lion%29.jpg", "https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2019/10/giant-panda-750x400.jpg"]

const randomImgArr = [];
const randomArr = [];
const Grid = () => {
    // const imgRef = useRef(null);
    let count = 0;
    let imgSrcNext = "", imgSrcPrev = "";
    let clickedImgPrev;
    let clickedImgNext;
    const handleClick = (event)=>{
        clickedImgPrev = clickedImgNext;
        clickedImgNext = event.target;
        clickedImgNext.setAttribute("src", randomImgArr[clickedImgNext.getAttribute("id")]);
        if(!clickedImgPrev || imgSrcNext === ""){
            // clickedImg.setAttribute("ref", imgRef);
            imgSrcNext = clickedImgNext.getAttribute("src");
        }
        else{
            imgSrcPrev = imgSrcNext;
            imgSrcNext = clickedImgNext.getAttribute("src");
            if(imgSrcNext !== imgSrcPrev){
                // imgRef.current.src = "https://banner2.cleanpng.com/20180524/ekl/kisspng-playing-card-visual-arts-tarot-studio-5b07327aead6e9.4964592815271983309619.jpg";
                setTimeout(()=>{
                    clickedImgNext.setAttribute("src", "https://banner2.cleanpng.com/20180524/ekl/kisspng-playing-card-visual-arts-tarot-studio-5b07327aead6e9.4964592815271983309619.jpg");
                    clickedImgPrev.setAttribute("src", "https://banner2.cleanpng.com/20180524/ekl/kisspng-playing-card-visual-arts-tarot-studio-5b07327aead6e9.4964592815271983309619.jpg");
                }, 2000)
                imgSrcNext = "";
                imgSrcPrev = "";
            }
            else{
                clickedImgNext.style.opacity = "0.3";
                clickedImgPrev.style.opacity = "0.3";
                clickedImgNext = undefined;
                clickedImgPrev = undefined;
            }
        }
        // console.log(clickedImg.getAttribute("src"));

    }
    while(randomArr.length < 36){
        let randomNum = Math.floor((Math.random()*36)+0);
        if(randomArr.includes(randomNum) === false){
            randomArr.push(randomNum);
            randomImgArr.push(imgArr[randomNum]);
        }
    }
    // useEffect(()=>{
    //     document.querySelectorAll(".column").forEach((cell)=>cell.addEventListener("click", handleClick));
    // },[]);

    return (
        <Container>
            {[1,2,3,4,5,6].map((row)=>(<div key={"row"+row} id="row">
                {[1,2,3,4,5,6].map((col)=>(<div key={row*col-1} className="column" id="col">
                    <img id={count++} style={{height: '5.8rem', width: '4.8rem', backgroundRepeat: 'no-repeat'}} onClick={handleClick} src="https://banner2.cleanpng.com/20180524/ekl/kisspng-playing-card-visual-arts-tarot-studio-5b07327aead6e9.4964592815271983309619.jpg" alt="backImage" /></div>))}
            </div>))}
            {/* {imgArr.map((pic, index)=>(<img key={"img"+index} style={{height:"5.8rem", width:"4.8rem"}}src={pic} alt="front"/>))} */}
            <br></br>
            {/* {randomImgArr.map((pic, index)=>(<img key={"randomImg"+index} style={{height:"5.8rem", width:"4.8rem"}}src={pic} alt="randomFront"/>))} */}
        </Container>
    );
};

export default Grid;