
const Hero: React.FC = () => (
    <div className="flex flex-cols">
        <img src="logo.png" width={"170px"} className="bg-[#BDB7C5] "/>
        <div
            className="p-10 text-center text-white grow"

        >
            <h2 className="text-4xl font-bold">Explora los últimos descubrimientos</h2>
            <p className="mt-4">Mantente informado con los avances científicos más recientes.</p>
        </div>
    </div>
);

export default Hero;
