import styled from "styled-components";
import { FC, useState } from "react";
import { motion } from "framer-motion";
import { Svg } from "../../../assets/svg";

const { SideBar_IconA, SideBar_IconB, SideBar_IconC, SideBar_IconD } = Svg;

interface IconItem {
  id: string;
  icon: React.ReactNode;
  label: string;
}

const MediaKitIcon = () => {
  return (
    <svg
      className="hovered"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.8403 4.92499V11.025C15.8403 11.415 15.5303 11.725 15.1403 11.725H9.98027C9.59027 11.725 9.28027 11.415 9.28027 11.025V10.055H4.98027C4.59027 10.055 4.28027 9.74499 4.28027 9.35499V3.25499C4.28027 2.86499 4.59027 2.55499 4.98027 2.55499H10.1403C10.5303 2.55499 10.8403 2.86499 10.8403 3.25499V4.22499H15.1403C15.5203 4.22499 15.8403 4.54499 15.8403 4.92499Z"
        fill="url(#paint0_linear_15421_1459)"
      />
      <path
        d="M11.59 14.1849H2.7C2.31 14.1849 2 13.8749 2 13.4849V6.55492C2 6.16492 2.31 5.85492 2.7 5.85492H11.59C11.98 5.85492 12.29 6.16492 12.29 6.55492V13.4849C12.29 13.8749 11.98 14.1849 11.59 14.1849Z"
        fill="url(#paint1_linear_15421_1459)"
      />
      <path
        d="M21.3 21.445H2.7C2.31 21.445 2 21.135 2 20.745V8.47496C2 8.08496 2.31 7.77496 2.7 7.77496H21.3C21.69 7.77496 22 8.08496 22 8.47496V20.745C22 21.135 21.69 21.445 21.3 21.445Z"
        fill="url(#paint2_linear_15421_1459)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_15421_1459"
          x1="4.27548"
          y1="7.14244"
          x2="15.8365"
          y2="7.14244"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FCFF1C" />
          <stop offset="1" stop-color="#FF9D0A" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_15421_1459"
          x1="2"
          y1="10.0223"
          x2="12.293"
          y2="10.0223"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#E7CFFF" />
          <stop offset="1" stop-color="#870FFF" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_15421_1459"
          x1="2"
          y1="14.6143"
          x2="22"
          y2="14.6143"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#03FFE5" />
          <stop offset="1" stop-color="#14B348" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const StoreIcon = () => {
  return (
    <svg
      className="hovered"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.9998 22.0599H4.97984C4.62984 22.0599 4.33984 21.7799 4.33984 21.4199V7.39995C4.33984 7.04995 4.61984 6.75995 4.97984 6.75995H18.9998C19.3498 6.75995 19.6398 7.03995 19.6398 7.39995V21.4199C19.6398 21.7699 19.3498 22.0599 18.9998 22.0599Z"
        fill="url(#paint0_linear_15421_1453)"
      />
      <path
        d="M20.4602 15.72L7.59017 5.22003C7.13017 4.84003 7.39017 4.09003 7.99017 4.09003H20.8602C21.2102 4.09003 21.5002 4.37003 21.5002 4.73003V15.24C21.5002 15.77 20.8802 16.06 20.4602 15.72Z"
        fill="url(#paint1_linear_15421_1453)"
      />
      <path
        d="M3.54 13.58L16.41 3.07C16.87 2.69 16.61 1.94 16.01 1.94H3.14C2.79 1.94 2.5 2.22 2.5 2.58V13.09C2.5 13.62 3.12 13.92 3.54 13.58Z"
        fill="url(#paint2_linear_15421_1453)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_15421_1453"
          x1="4.34182"
          y1="14.4112"
          x2="19.6375"
          y2="14.4112"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF9868" />
          <stop offset="1" stop-color="#FF5403" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_15421_1453"
          x1="7.35294"
          y1="9.97921"
          x2="21.5002"
          y2="9.97921"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#03FFE5" />
          <stop offset="1" stop-color="#14B348" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_15421_1453"
          x1="2.5"
          y1="7.8319"
          x2="16.6472"
          y2="7.8319"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FCFF1C" />
          <stop offset="1" stop-color="#FF9D0A" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const InvoicingIcon = () => {
  return (
    <svg
      className="hovered"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.5202 6.64998V21.05C20.5202 21.63 20.0502 22.1 19.4702 22.1H9.29023C8.71023 22.1 8.24023 21.63 8.24023 21.05V20.16L17.3402 16.72C17.7002 16.58 17.9402 16.24 17.9402 15.85V5.59998H19.4702C20.0502 5.59998 20.5202 6.06998 20.5202 6.64998Z"
        fill="url(#paint0_linear_15421_1465)"
      />
      <path
        d="M17.9402 5.59998V15.86C17.9402 16.25 17.7002 16.59 17.3402 16.73L8.24023 20.17V6.64998C8.24023 6.06998 8.71023 5.59998 9.29023 5.59998H17.9402Z"
        fill="url(#paint1_linear_15421_1465)"
      />
      <path
        d="M17.94 2.92999V5.59999H9.28998C8.70998 5.59999 8.23998 6.06999 8.23998 6.64999V20.17L4.73998 21.49C4.12998 21.72 3.47998 21.27 3.47998 20.62V2.91999C3.47998 2.40999 3.89998 1.98999 4.40998 1.98999H17.01C17.52 1.99999 17.94 2.41999 17.94 2.92999Z"
        fill="url(#paint2_linear_15421_1465)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_15421_1465"
          x1="8.2422"
          y1="13.8522"
          x2="20.5182"
          y2="13.8522"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FCFF1C" />
          <stop offset="1" stop-color="#FF9D0A" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_15421_1465"
          x1="8.2422"
          y1="12.8857"
          x2="17.9372"
          y2="12.8857"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFDDCD" />
          <stop offset="1" stop-color="#FF5403" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_15421_1465"
          x1="3.48199"
          y1="11.7778"
          x2="17.937"
          y2="11.7778"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#E7CFFF" />
          <stop offset="1" stop-color="#870FFF" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const FloatingSidebar: FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  const icons: IconItem[] = [
    { id: "home", icon: <SideBar_IconA />, label: "Link to Bio" },
    { id: "wallet", icon: <StoreIcon />, label: "Store" },
    { id: "user", icon: <MediaKitIcon />, label: "Media Kit" },
    { id: "settings", icon: <InvoicingIcon />, label: "Invoicing" },
  ];

  return (
    <SidebarWrapper>
      {icons.map((item) => (
        <IconWrapper
          key={item.id}
          onMouseEnter={() => setHovered(item.id)}
          onMouseLeave={() => setHovered(null)}
        >
          {item.icon}
          {hovered === item.id && (
            <TooltipWrapper
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              {item.label}
            </TooltipWrapper>
          )}
        </IconWrapper>
      ))}
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  background: #ffffff;
  border-radius: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  padding: 1rem 0.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;

  .hovered {
    color: yellow;
  }
`;

const IconWrapper = styled.div`
  position: relative;
  margin: 0.75rem 0;
  cursor: pointer;

  svg {
    font-size: 1.4rem;
    color: #555;
    transition: all 0.25s ease;
  }

  &:hover svg {
    color: #111;
    transform: scale(1.1);
  }
`;

const TooltipWrapper = styled(motion.div)`
  position: absolute;
  left: 3rem;
  top: 50%;
  transform: translateY(-50%);
  background: #111;
  color: #fff;
  font-size: 0.8rem;
  padding: 0.35rem 0.7rem;
  border-radius: 0.5rem;
  white-space: nowrap;
  pointer-events: none;
`;
