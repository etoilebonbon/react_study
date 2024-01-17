import img from "./images/profile.png"
import toggle from "./images/but_toggle.png"
import Nav from "./Nav";

function App() {
  return (
    <div className="w-full h-screen bg-blue-300 bg-main overflow-hidden">
      <Nav />
      {/* 내용 */}
      <div className="w-full flex justify-center">
        {/* 왼쪽:텍스트 상자 */}
          <div className="w-[40%] h-[210px] mt-24 ">
          <p className="text-blue-100 text-[50px] ">I am</p>
          <p className="text-white text-[50px] font-bold -mt-6 pb-5">Lee HanJin</p>
          <p className="text-white">I'm Lee Han Jin, an AI engineer<br/>
          with a passion for deep thinking.</p>
        </div>
        {/* 오른쪽: 프로필 사진 */}
        <div className="w-[40%]">
          <img src={img} alt="aa" />
        </div>
      </div>

    </div>
  );
}

export default App;
