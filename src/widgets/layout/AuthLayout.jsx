import { Outlet } from "react-router-dom";
const AuthLayout = () => {
  return (
    <div class="relative min-h-screen bg-[#0a0a0f] overflow-hidden">
    {/* <!-- Estrellas dispersas --> */}
    <div class="absolute inset-0 z-0 pointer-events-none">
      {/* <!-- Puedes duplicar o modificar la cantidad --> */}
      <div class="absolute w-0.5 h-0.5 bg-white rounded-full opacity-20 top-[10%] left-[20%]"></div>
      <div class="absolute w-0.5 h-0.5 bg-white rounded-full opacity-20 top-[90%] left-[80%]"></div>
      <div class="absolute w-[1px] h-[1px] bg-white rounded-full opacity-30 top-[50%] left-[60%]"></div>
      <div class="absolute w-[1px] h-[1px] bg-white rounded-full opacity-10 top-[70%] left-[25%]"></div>
      <div class="absolute w-[1px] h-[1px] bg-white rounded-full opacity-25 top-[85%] left-[45%]"></div>
      <div class="absolute w-[1px] h-[1px] bg-white rounded-full opacity-25 top-[55%] left-[25%]"></div>
      <div class="absolute w-[1px] h-[1px] bg-white rounded-full opacity-25 top-[95%] left-[45%]"></div>
      {/* <!-- Agrega más para más estrellas --> */}
    </div>
  
    {/* <!-- Contenido principal --> */}
    <div class="relative z-10 flex items-center justify-center h-screen">
      <Outlet/>
    </div>
  </div>
  
  )
};

export default AuthLayout;
