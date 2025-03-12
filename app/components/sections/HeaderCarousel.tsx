import styles from "./carousel.module.css";
export default function CarouselPlayground() {
  return (
    <div
      className={styles.slider}
      style={{ "--width": "100vw", "--height": "300px" } as React.CSSProperties}
    >
      <img
        src="https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGlnaCUyMHJlc29sdXRpb24lMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D"
        alt=""
        className=""
        style={
          {
            "--height": "100%",
            "--width": "100%",
            "--index": 0,
          } as React.CSSProperties
        }
      />
      <img
        src="https://img.freepik.com/premium-photo/anime-scene-man-standing-red-room-with-red-light-generative-ai_925897-125754.jpg"
        alt=""
        className=""
        style={
          {
            "--height": "100%",
            "--width": "100%",
            "--index": 1,
          } as React.CSSProperties
        }
      />
    </div>
  );
}
