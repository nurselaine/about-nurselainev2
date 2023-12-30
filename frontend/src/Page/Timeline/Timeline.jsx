import React from "react";
import { Chrono } from "react-chrono";
import { motion } from "framer-motion";
import items from "../../utils/data/Timeline.json";
import Layout from "../../Component/Layout/Layout";
import { Box, Center } from "@chakra-ui/react";
import PageDescription from "../../Component/PageDescription";
import Projects from "../Project/Project";
import CertificateSection from "../../Component/Certification/CertificateSection";
import Tech from "../../Component/Tech/Tech";
import Social from "../../Component/Socials/Social";

const Timeline = () => {
  return (
    <Layout>
      <motion.div exit={{ opacity: 0 }}>
        <Box
          w="100%"
          h="100px"
          bgGradient="linear-gradient(360deg, #050816 20%, #000000 67%)"
        />
        <Box
          id="timeline"
          h="100%"
          w="100%"
          px={[8, 16, 24]}
          bg="#050816"
          position="relative"
          overflow="hidden"
        >
          <Box position="absolute" top="200px" right="100px" opacity={0.5}>
            <motion.div
              initial={{ opacity: 0.5 }}
              animate={{ scale: 1.1 }}
              transition={{
                type: "spring",
                damping: 3,
                repeat: "infinite",
                delay: 0,
              }}
            >
              <Blob w="200px" h="200px" r="100px" t="20px" bg="purple.200" />
            </motion.div>
          </Box>
          <PageDescription
            title="Introduction"
            heading="Overview"
            overview={items.overview}
          />
          <Box h="auto" w="100%">
            <CertificateSection />
          </Box>
          <Center w="100%" pt="5rem">
            <Box position="absolute" top="450px" left="-125px" opacity={0.5}>
              <motion.div
                initial={{ opacity: 0.9 }}
                animate={{ scale: 1.3 }}
                transition={{
                  type: "spring",
                  damping: 3,
                  repeat: "infinite",
                  delay: 0,
                }}
              >
                <Blob w="250px" h="250px" bg="pink.200" blur="100px" />
              </motion.div>
            </Box>
            <Box h="100%" w="100%" position="relative">
              <Box position="absolute" top="400px" right="-150px">
                <motion.div
                  initial={{ opacity: 0.5 }}
                  animate={{ scale: 1.1 }}
                  transition={{
                    type: "spring",
                    damping: 3,
                    repeat: "infinite",
                    delay: 0,
                  }}
                >
                  <Blob
                    w="300px"
                    h="300px"
                    r="100px"
                    t="100px"
                    bg="gray.50"
                    blur="150px"
                  />
                </motion.div>
              </Box>
              <Chrono
                items={items.items}
                mode="VERTICAL_ALTERNATING"
                theme={{
                  primary: "#D53F8C", // pink 500
                  secondary: "#050816", // purple 700
                  cardBgColor: "#718096", // gray.600
                  cardForeColor: "#050816",
                  titleColor: "#F7FAFC", // gray 50
                  cardTitleColor: "#E2E8F0",
                  cardSubtitleColor: "#050816",
                  titleColorActive: "#D53F8C", // pink 500
                }}
                fontSizes={{
                  cardText: "1.5rem",
                  cardTitle: "1.75rem",
                }}
                slideShow
                slideItemDuration={4500}
                scrollable={{}}
              />
              <Social />
              <Box position="absolute" bottom="200px" left="-200px">
                <motion.div
                  initial={{ opacity: 0.5 }}
                  animate={{ scale: 1.1 }}
                  transition={{
                    type: "spring",
                    damping: 3,
                    repeat: "infinite",
                    delay: 0,
                  }}
                >
                  <Blob
                    w="250px"
                    h="250px"
                    r="100px"
                    t="100px"
                    bg="blue.400"
                    blur="100px"
                  />
                </motion.div>
              </Box>
            </Box>
          </Center>
          <Box w="100%" mt={["2rem", "4rem"]}>
            <PageDescription title={"My tools"} heading={"Technologies."} />
            <Tech />
          </Box>
          <Box w="100%" py={["2rem", "4rem"]}>
            <Projects />
          </Box>
        </Box>
        <Box
          w="100%"
          h="100px"
          bgGradient="linear-gradient(360deg, #000000 20%, #050816 67%);"
        />
      </motion.div>
    </Layout>
  );
};

const Blob = ({ w, h, bg, r, l, t, b, blur, ...props }) => {
  let defaultParam = {
    w: w || "100px",
    h: h || "100px",
    bg: bg || "white",
    r: r || "0",
    t: t || "0",
    b: b || "0",
    l: l || "0",
  };

  return (
    <Box
      borderRadius="50%"
      className="blob"
      filter={`blur(${blur || "90px"})`}
      w={w}
      h={h}
      bg={bg}
    />
  );
};

export default Timeline;