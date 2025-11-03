import { useForm } from "react-hook-form";
import { schema } from "./schemas/Authschema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const App = () => {
  const {
    register,
    formState: { isSubmitting, errors },
    setError,
    handleSubmit,
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      lastName: "",
      firstName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });

  const handleRes = async (res) => {
    if (!res.ok) {
      const text = await res.text().catch(() => "Unkown Error");
      throw new Error(text);
    }
    return res.json();
  };

  const registerFn = async (data) => {
    const response = await fetch(
      "https://68fa362cef8b2e621e7f36a6.mockapi.io/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    return handleRes(response);
  };

  const { mutate, isPending } = useMutation({
    mutationFn: registerFn,
    onSuccess: () => {
      console.log("Login Successfull");
      toast.success("Registration SUccessfull !", {
        position: "bottom-center",
      });
      reset();
    },
    onError: (error) => {
      const message = error?.message || "Something went wrong";
      setError("root", { message });
      console.log(message);
      toast.error("Something went wrong :(", { position: "bottom-center" });
    },
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <div className=" bg-[#0A0D17] font-[inter] flex h-[100dvh] min-h-[1000px] pb-[100px] flex-col justify-center">
      <div className="w-max-[1500px] mx-auto flex flex-col text-center">
        <h2>
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FFFFFF] via-[#FFFFFF] to-[#A604F2] text-[82px] font-[inter-extrabold] ">
            Get in touch
          </span>
        </h2>
        <p className="text-2xl text-[#FFFFFF70] font-medium mb-[67px]">
          Reach out, and let's create a universe of possibilities together!
        </p>
        <div className=" bg-[#FFFFFF0A] border-2 border-[#0A0D170D] rounded-[20px] flex relative py-[20px] items-center  min-w-[1250px] backdrop-blur-[380px]">
          <div className="max-w-[500px] p-[40px] text-start ">
            <div className="absolute w-[150px] h-[150px] bg-[#A604F2] rounded-[100%] blur-[200px] left-[-80px] top-[-80px]" />
            <h3 className="text-[30px] text-[#FFFFFF] font-semibold mb-[8px]">
              Let’s connect constellations
            </h3>
            <p className="text-[16px] text-[#FFFFFF80] font-regular tracking-[-1%] mb-[41px]">
              Let's align our constellations! Reach out and let the <br /> magic
              of collaboration illuminate our skies.
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col space-y-[14px]"
            >
              <div className="grid grid-cols-2 gap-[14px]">
                <div>
                  <input
                    className="border border-[#FFFFFF20] bg-[#FFFFFF0D] placeholder-[#FFFFFF60] text-[15px] py-[12px] px-[14px] font-[400px] rounded-[5px] text-white w-full"
                    type="text"
                    placeholder="Last Name"
                    {...register("lastName")}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    className="border border-[#FFFFFF20] bg-[#FFFFFF0D] placeholder-[#FFFFFF60] text-[15px] py-[12px] px-[14px] font-[400px] rounded-[5px] text-white w-full"
                    placeholder="First Name"
                    {...register("firstName")}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
              </div>
              <input
                className="border border-[#FFFFFF20] bg-[#FFFFFF0D] placeholder-[#FFFFFF60] text-[15px] py-[12px] px-[14px] font-[400px] rounded-[5px] text-white"
                type="text"
                name=""
                id=""
                placeholder="Email"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
              <input
                placeholder="Phone Number"
                className="border border-[#FFFFFF20] bg-[#FFFFFF0D] placeholder-[#FFFFFF60] text-[15px] py-[12px] px-[14px] font-[400px] rounded-[5px] text-white"
                type="text"
                name=""
                id=""
                {...register("phoneNumber")}
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm">
                  {errors.phoneNumber.message}
                </p>
              )}
              <textarea
                placeholder="Message"
                rows={5}
                cols={50}
                name=""
                id=""
                {...register("message")}
                className="border border-[#FFFFFF20] bg-[#FFFFFF0D] placeholder-[#FFFFFF60] text-[15px] py-[12px] px-[14px] font-[400px] resize-none rounded-[5px] text-white"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
              <button
                className=" text-[#FFFFFF] bg-linear-to-r from-[#763AF5] to-[#A604F2] px-[10] py-[12px] rounded-[5px]"
                type="submit"
                disabled={isSubmitting || isPending}
              >
                {isPending ? "Sending ..." : "Send it to the moon 🚀"}
              </button>
            </form>
            <div className="absolute w-[150px] h-[150px] bg-[#763AF5] rounded-[100%] blur-[200px] left-[-80px]" />
          </div>
          <div className="relative">
            <img
              className=" w-[516px] h-[536px] "
              src="/form-img.png"
              alt="astronaut"
            />
            <div className="w-[134px] h-[134px] absolute bg-[#763AF5] top-[40%] right-[-120px] blur-[150px]" />
            <div>
              <p className="text-[#FFFFFF70] z-10 absolute bottom-[48px] text-start left-[28px] font-[400px]">
                “Two lunar months revealed Earth's fragile beauty against vast{" "}
                <br />
                silence, transforming my view of our place in the universe.{" "}
                <br />
                <span className="font-[500px] text-[#FFFFFF]">
                  Irinel Traista
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
