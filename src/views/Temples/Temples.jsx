import { CardTemple } from "./components/CardTemple"
export const Temples = () => {
    return (
        <>
        <div className="w-full h-full">
            <div className="bg-custom-drakEarth p-10 border-4 border-custom-opaqueGreen text-center flex flex-row gap-3 justify-evenly">
                <div>
                    <h1>Escoge la ubicacion</h1>
                </div>

                <div>
                    <select name="" id="">
                        <option value="">Acambaro centro</option>
                        <option value="">Loreto</option>
                        <option value="">Los Organos</option>
                        <option value="">Las Jicamas</option>
                        <option value="">San Diego</option>
                        <option value="">Chupicuaro</option>
                        <option value="">Monte Prieto</option>
                    </select>
                </div>
            </div>
            <div className="mt-5 flex flex-col gap-5">
                <CardTemple/>
                <CardTemple/>
                <CardTemple/>
                <CardTemple/>
                <CardTemple/>
            </div>

        </div>
        </>
    )
}