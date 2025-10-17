import NavBar from "";

import React, { useState } from "react";
import {
  Header,
  NavWrap,
  Left,
  Center,
  Right,
  LogoSpace,
  Overlay,
  DrawerPanel,
  DrawerNavList,
  DrawerActions,
  VisuallyHidden,
  IconMobile,
  HambuggerStyleMobile,
} from "../../../components/Core/Navbar/Navbar.styles";
import { Svg } from "../../../assets/svg";
import { motion, AnimatePresence } from "framer-motion";
import Flex from "../../../components/Core/Flex/Flex";
import Box from "../../../components/Core/Box/Box";

import {
  useMediaQueryRequest,
  useCurrentScreenQuery,
} from "../../../hooks/useMediaQueryRequest";

const {
  CircleAvatar,
  Analytics,
  App,
  Bell,
  Crm,
  DropDown,
  EmptyBook,
  ExportDropDown,
  Hambugger,
  Home,
  Logo,
  Message,
  QuestionIcon,
  Revenue,
  SideBar_IconA,
  SideBar_IconB,
  SideBar_IconC,
  SideBar_IconD,
} = Svg;

const NAV_ITEMS = [
  { label: "Home", href: "#", Icon: Home },
  { label: "Analytics", href: "#", Icon: Analytics },
  { label: "Revenue", href: "#", Icon: Revenue },
  { label: "CRM", href: "#", Icon: Crm },
  { label: "Apps", href: "#", Icon: App },
];

const AppLogo = () => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.0844 12.5509H24.3012C24.072 12.5509 23.8523 12.4598 23.6903 12.2978C23.5282 12.1358 23.4372 11.916 23.4372 11.6868V6.96123C23.4372 6.73208 23.5282 6.51232 23.6903 6.35029C23.8523 6.18826 24.072 6.09723 24.3012 6.09723H26.178C28.26 6.09723 29.9484 7.78443 29.9484 9.86644V11.6868C29.9484 11.916 29.8574 12.1358 29.6953 12.2978C29.5333 12.4598 29.3135 12.5509 29.0844 12.5509Z"
        fill="#131316"
      />
      <path
        d="M6.06241 26.1516V15.6012C6.06241 15.4877 6.08476 15.3754 6.12818 15.2705C6.1716 15.1657 6.23524 15.0705 6.31547 14.9902C6.3957 14.91 6.49094 14.8464 6.59577 14.803C6.70059 14.7595 6.81295 14.7372 6.92641 14.7372H11.6832C11.9124 14.7372 12.1321 14.8282 12.2941 14.9902C12.4562 15.1523 12.5472 15.372 12.5472 15.6012V29.058C12.5472 29.2871 12.4562 29.5069 12.2941 29.6689C12.1321 29.831 11.9124 29.922 11.6832 29.922H9.83281C7.75081 29.922 6.06241 28.2336 6.06241 26.1516Z"
        fill="#131316"
      />
      <path
        d="M14.748 26.1516V15.6012C14.748 15.372 14.839 15.1523 15.001 14.9902C15.1631 14.8282 15.3828 14.7372 15.612 14.7372H20.3688C20.5979 14.7372 20.8177 14.8282 20.9797 14.9902C21.1418 15.1523 21.2328 15.372 21.2328 15.6012V29.058C21.2328 29.2871 21.1418 29.5069 20.9797 29.6689C20.8177 29.831 20.5979 29.922 20.3688 29.922H18.5184C16.4364 29.922 14.748 28.2336 14.748 26.1516Z"
        fill="#131316"
      />
      <path
        d="M23.4337 26.1516V15.6012C23.4337 15.372 23.5247 15.1523 23.6867 14.9902C23.8488 14.8282 24.0685 14.7372 24.2977 14.7372H29.0544C29.2836 14.7372 29.5033 14.8282 29.6653 14.9902C29.8274 15.1523 29.9184 15.372 29.9184 15.6012V29.058C29.9184 29.2871 29.8274 29.5069 29.6653 29.6689C29.5033 29.831 29.2836 29.922 29.0544 29.922H27.204C25.1221 29.922 23.4337 28.2336 23.4337 26.1516Z"
        fill="#131316"
      />
      <path
        d="M17.5416 6.0876L6.91804 6.078C6.6891 6.078 6.46952 6.16887 6.30752 6.33064C6.14552 6.49241 6.05435 6.71186 6.05404 6.9408L6.05164 8.838C6.05044 10.8768 7.70163 12.5328 9.74163 12.534L20.3652 12.5448C20.5945 12.5448 20.8144 12.4538 20.9766 12.2918C21.1388 12.1298 21.2301 11.9101 21.2304 11.6808V9.7848C21.234 7.7448 19.5816 6.09 17.5416 6.0876Z"
        fill="#131316"
      />
    </svg>
  );
};
export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  //now i add mobile screen resolver helper
  const currentScreen = useCurrentScreenQuery();

  const { hitsBreakPoint } = useMediaQueryRequest({
    screenResolver: "(max-width: 768px)",
  });

  const overlayVar = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const panelVar = {
    hidden: { x: "-100%" },
    visible: {
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    exit: { x: "-100%", transition: { ease: "easeInOut" } },
  };

  const listItemVar = {
    hidden: { x: -30, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: 0.06 * i, type: "spring", stiffness: 280 },
    }),
  };

  return (
    <Box width="95%">
      <Flex
        justifyContent="between"
        alignItems="center"
        height="80px"
        borderBottomColor="#DBDCE0"
        borderWidth="1px"
        borderBottomStyle="solid"
        boxShadow="0px 2px 6px 0px #2D3B430F"
        style={{
          marginTop: "20px",
          borderRadius: "50px",
          boxShadow: "0px 2px 4px 0px #2D3B430D",
        }}
      >
        <NavWrap>
          {hitsBreakPoint ? (
            <Flex justifyContent="between" width="100%">
              <HambuggerStyleMobile
                aria-label={open ? "Close menu" : "Open menu"}
                className="hamburger"
                onClick={() => setOpen((s) => !s)}
              >
                {open && hitsBreakPoint ? (
                  <Hambugger size={20} />
                ) : (
                  <Hambugger size={20} />
                )}
                <VisuallyHidden>
                  {open ? "Close" : "Open"} navigation
                </VisuallyHidden>
              </HambuggerStyleMobile>

              <LogoSpace>
                <AppLogo />
              </LogoSpace>
            </Flex>
          ) : (
            <Left>
              <button
                aria-label={open ? "Close menu" : "Open menu"}
                className="hamburger"
                onClick={() => setOpen((s) => !s)}
              >
                {open && hitsBreakPoint ? (
                  <Hambugger size={20} />
                ) : (
                  <Hambugger size={20} />
                )}
                <VisuallyHidden>
                  {open ? "Close" : "Open"} navigation
                </VisuallyHidden>
              </button>

              <LogoSpace>
                <AppLogo />
              </LogoSpace>
            </Left>
          )}

          <Center aria-label="Primary navigation">
            {NAV_ITEMS.map(({ label, href, Icon }) => (
              <Flex gap="10">
                <Box
                  ml="3"
                  mr="2"
                  style={{ fontSize: "20px", marginTop: "3px" }}
                >
                  <Icon />
                </Box>

                <a key={label} href={href}>
                  {label}
                </a>
              </Flex>
            ))}
          </Center>

          <Right>
            <button className="icon-btn" title="Notifications">
              <Bell />
            </button>
            <button className="icon-btn" title="Apps">
              <Message />
            </button>
            <button className="icon-btn" title="Account">
              <CircleAvatar />
            </button>
          </Right>
        </NavWrap>

        <AnimatePresence>
          {open && hitsBreakPoint && (
            <Overlay
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={overlayVar}
              onClick={() => setOpen(false)}
            >
              <DrawerPanel
                variants={panelVar}
                //initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Drawer header */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <LogoSpace>
                    <AppLogo />
                  </LogoSpace>
                  <HambuggerStyleMobile
                    onClick={() => setOpen(false)}
                    aria-label="Close menu"
                  >
                    <Hambugger />
                  </HambuggerStyleMobile>
                </div>

                <DrawerNavList>
                  {NAV_ITEMS.map((it, idx) => (
                    <motion.li
                      key={it.label}
                      custom={idx}
                      initial="hidden"
                      animate="visible"
                      variants={listItemVar}
                    >
                      <a href={it.href} onClick={() => setOpen(false)}>
                        {it.label}
                      </a>
                    </motion.li>
                  ))}
                </DrawerNavList>

                <DrawerActions>
                  <motion.div
                    className="icon-btn"
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.15 }}
                  >
                    <IconMobile>
                      <Bell />
                    </IconMobile>
                  </motion.div>

                  <motion.div
                    className="icon-btn"
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.21 }}
                  >
                    <IconMobile>
                      <CircleAvatar />
                    </IconMobile>
                  </motion.div>
                </DrawerActions>
              </DrawerPanel>
            </Overlay>
          )}
        </AnimatePresence>
      </Flex>
    </Box>
  );
};

export default Navbar;
