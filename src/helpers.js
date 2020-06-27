export const createAnimation = (el, targetName, percent) => {
  const elRect = el.current.getBoundingClientRect();
  const targetRect = document
    .querySelector(`#${targetName}-inventory`)
    .getBoundingClientRect();
  const maxAmount = percent / 5;
  // console.log(percent)

  for (let i = 0; i < maxAmount; i++) {
    setTimeout(() => {
      const randomIntX = getRandomInt(-100, 100);
      const randomIntY = getRandomInt(-100, 100);

      const clone = el.current.cloneNode(true);
      clone.classList.add(`clone-${targetName}-${i}`);
      clone.addEventListener("animationend", () => {
        clone.remove();
        style.remove();
      });

      const style = document.createElement("style");
      const css = `
        .clone-${targetName}-${i} {
          pointer-events: none;
          position: absolute;
          z-index: 9999;
          top: 0;
          left: 0;
          animation: clone-${targetName}-${i} .8s forwards cubic-bezier(0.215, 0.610, 0.355, 1.000);
        }

        @keyframes clone-${targetName}-${i} {
          0% {
            transform: translate3d(${elRect.left}px,${
        elRect.top
      }px,0) scale(.8);
            opacity: 1;
          }
          30% {
            transform: translate3d(${elRect.left + randomIntX}px,${
        elRect.top + randomIntY
      }px,0) scale(1.2);
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          90% {
            opacity: 0;
          }
          100% {
            transform: translate3d(${targetRect.left - targetRect.width}px,${
        targetRect.top - targetRect.height
      }px,0) scale(.2);
            opacity: 0;
          }
        }
      `;
      style.appendChild(document.createTextNode(css));

      document.body.appendChild(clone);
      document.body.appendChild(style);
    }, i * 5);
  }
};
