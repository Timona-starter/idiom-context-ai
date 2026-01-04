const BackgroundImage = () => {
  return (
    <div
      className="fixed inset-0 bg-cover bg-center -z-10"
      style={{
        backgroundImage: "url('/images/background.png')",
        opacity: 1,
      }}
    />
  );
};

export default BackgroundImage;
