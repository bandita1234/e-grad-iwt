import React from "react";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <div>
      <Nav />
      <div className="flex gap-5">
        <div className="flex-1">
          <img
            src="https://www.thesaurus.com/e/wp-content/uploads/2022/05/20220512_graduation_1000x562.jpg"
            alt=""
          />
        </div>
        <div className="flex-1 p-10">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            molestiae exercitationem laudantium suscipit nemo, quae esse vel
            accusamus necessitatibus tempore, libero rerum quod, beatae corrupti
            repudiandae assumenda voluptatibus harum officia? Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Ipsa dolore pariatur illo
            reprehenderit neque veniam laboriosam. Illum explicabo quidem nulla.
            Aperiam cupiditate, accusamus ad aspernatur possimus ipsam
            asperiores vero voluptatem repellat modi, odio deserunt? Inventore
            optio asperiores recusandae? Iste, ad harum. Hic nulla, atque
            dolores architecto magnam, inventore cupiditate quas eum dignissimos
            exercitationem doloremque.
          </p>
          <button className="bg-emerald-400 my-8 py-2 px-4 rounded-md text-white font-semibold">
            <a href="/login">Login Now!</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
