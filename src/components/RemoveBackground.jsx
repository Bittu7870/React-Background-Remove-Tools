import { useState } from "react";

const RemoveBackground = () => {
  const [image, setImage] = useState(null);
  const [bgRemove, setBgRemove] = useState(null);

  const handleRemoveBackground = async () => {
    const apiKey = import.meta.env.VITE_REMOVE_BG_API_KEY;
    const apiUrl = import.meta.env.VITE_API_URL;

    const formData = new FormData();
    formData.append("image_file", image, image.name);
    formData.append("size", "auto");

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "X-Api-Key": apiKey,
        },
        body: formData,
      });
      const data = await response.blob();
      const render = new FileReader();
      render.onloadend = () => setBgRemove(render.result);
      render.readAsDataURL(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(image);
  return (
    <div className="flex justify-center">
      <div className="">
        <div className="input">
          <div className="input border border-gray-700  rounded-lg bg-gray-950 mb-9 ">
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="text-sm text-gray-500 file:mr-5 file:py-3 file:px-4 file:text-xs file:font-medium file:border-0 file:rounded-md file:bg-gray-800 file:text-gray-500 hover:file:cursor-pointer hover:file:bg-blue-50 hover:file:text-blue-700 lg:w-[40em]"
            />
          </div>
          <div className="flex justify-center mb-9">
            <button
              type="button"
              onClick={handleRemoveBackground}
              className="text-black bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 font-medium rounded-lg text-sm px-6 py-3 text-center "
            >
              Remove Background
            </button>
          </div>
        </div>
        <div className="flex gap-2 mb-9">
          {image && (
            <div className="border-2 border-gray-600 rounded-l-lg border-dashed flex justify-center p-2 w-40 lg:w-80 ">
              <img
                className="w-90 h-90"
                src={image ? URL.createObjectURL(image) : ""}
                alt="img"
              />
            </div>
          )}
          {bgRemove && (
            <div className="border-2 border-gray-500 rounded-r-lg border-dashed flex justify-center p-2 w-40 lg:w-80">
              <img className="w-90 h-90" src={bgRemove} alt="img" />
            </div>
          )}
        </div>
        {bgRemove && (
          <div className="flex justify-center">
            <a className="w-full" href={bgRemove} download={"save.png"}>
              <button className="bg-gray-800 text-white w-full py-2 px-3 rounded-lg border border-gray-600">
                Download
              </button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default RemoveBackground;
