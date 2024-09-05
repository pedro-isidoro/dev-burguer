export default function Header(){
  
  const checkRestaurantOpen = () => {
    const date = new Date();
    // console.log(date)
    const hour = date.getHours()
    // console.log(hour)
    const status = hour >= 17 && hour <= 23
    //true = restaurante aberto
    return status;
  }
  // const toastfyPopAction = (prop) => {
  //   if (prop) {
  //     return <Error color={iconColor} />;
  //   } else {
  //     return <Success color={iconColor} />;
  //   }
  // }
  return (
    <header className="w-full h-[420px] bg-zinc-900 bg-home bg-cover bg-center">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <img
          src="src/images/hamb-1.png"
          alt="Logo DevBurguer"
          className="w-32 h-32 rounded-full shadow-lg hover:scale-110 duration-200"
        />
        <h1 className="text-3xl mt-4 mb-2 font-bold text-white">Dev Burguer</h1>
        <span className="text-white font-medium">
          Rua JavaScript 24, São Paulo - SP
        </span>
        {checkRestaurantOpen() ? (
          <div
            className="bg-green-600 px-4 py-1 rounded-lg mt-5"
            id="date-span"
          >
            <span className="text-white font-medium">
              Seg á Dom - 17:00 às 23:00
            </span>
          </div>
        ) : (
          <div className="bg-red-600 px-4 py-1 rounded-lg mt-5" id="date-span">
            <span className="text-white font-medium">
              Seg á Dom - 17:00 às 23:00
            </span>
          </div>
        )}
      </div>
    </header>
  );
}