import React from "react";
import { Flex } from "@chakra-ui/react";
import certificate from "../../utils/data/Timeline.json";
import CertificateCard from "./CertificateCard";

const CertificateSection = () => {
  return (
    <Flex 
      flexDir='row' 
      wrap='wrap' 
      h='auto' 
      w="100%"
      pt={['4rem']}
    >
      {
        certificate.certificates.map((cert, idx) => (
          <CertificateCard id={`certificate-${idx}`} certificate={cert} />
        ))
      }
    </Flex>
  )
}

export default CertificateSection;