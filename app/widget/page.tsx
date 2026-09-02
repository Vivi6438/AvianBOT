"use client";

export default function WidgetPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      
      {/* KHUNG CHATBOT */}
      <div
        style={{
          width: "600px",
          height: "500px",
          overflow: "hidden",
          borderRadius: "20px",
          border: "1px solid #ccc",
          background: "white",
          boxShadow: "0 15px 40px rgba(0,0,0,0.18)",
        }}
      >
        {/* TOÀN BỘ AVIANBOT ĐƯỢC THU NHỎ CÙNG NHAU */}
        <iframe
          src="/"
          title="AvianBOT"
          style={{
            width: "1200px",
            height: "1000px",
            border: "0",
            transform: "scale(0.5)",
            transformOrigin: "top left",
          }}
        />
      </div>

    </main>
  );
}