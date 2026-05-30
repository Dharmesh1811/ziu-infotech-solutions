import React, { useRef } from "react";

export function ImageTransparent() {
  const canvasRef = useRef(null);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const img = new Image();
    const reader = new FileReader();

    reader.onload = () => {
      img.src = reader.result;
    };

    img.onload = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });

      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        // near white pixels
        if (r > 240 && g > 240 && b > 240) {
          data[i + 3] = 0; // alpha transparent
        }
      }

      ctx.putImageData(imageData, 0, 0);
    };

    reader.readAsDataURL(file);
  };

  const downloadImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const link = document.createElement("a");
    link.download = "transparent.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col items-center gap-6 max-w-md mx-auto my-8">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Image Background Remover
      </h2>
      <p className="text-gray-500 text-sm text-center">
        Upload an image with a white background to make it transparent and download as PNG.
      </p>

      <div className="w-full">
        <label className="block text-sm font-medium text-gray-700 mb-2">Select Image</label>
        <input 
          type="file" 
          onChange={handleImage} 
          accept="image/*"
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100 transition-colors"
        />
      </div>

      <div className="w-full bg-gray-50 rounded-lg border-2 border-dashed border-gray-200 p-4 flex justify-center items-center min-h-[200px] overflow-hidden">
        <canvas 
          ref={canvasRef} 
          className="max-w-full h-auto"
          style={{ backgroundImage: 'linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(135deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(135deg, transparent 75%, #ccc 75%)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 0, 10px -10px, 0px 10px' }}
        ></canvas>
      </div>

      <button 
        onClick={downloadImage} 
        className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all transform hover:-translate-y-0.5"
      >
        Download Transparent PNG
      </button>
    </div>
  );
}
