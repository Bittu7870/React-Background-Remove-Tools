const Navbar = () => {
  return (
    <>
      <div className="flex justify-center py-5">
        <div className="">
          <div className="flex justify-center mb-5">
            <img
              className="rounded-full w-28 "
              src="https://avatars.githubusercontent.com/u/118159437?s=400&u=3447b44355917c9fb373cc9ddc244261f187c78b&v=4"
              alt="img"
            />
          </div>
          <h1 className="text-white text-3xl lg:text-7xl font-medium text-center mb-3">
            Background Removal Tool
          </h1>
          <p className="text-white text-2xl font-light text-center mb-3">
            Fast, simple and great performance
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
