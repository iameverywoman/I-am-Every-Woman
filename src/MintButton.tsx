import styled from "styled-components";
import { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { CircularProgress } from "@material-ui/core";
import { GatewayStatus, useGateway } from "@civic/solana-gateway-react";
import { CandyMachine } from "./candy-machine";

export const CTAButton = styled(Button)`
  font-family: "VT323", monospace !important;
  justify-content: center !important;
  font-size: 1.5rem !important;
  font-weight: bold;
  color: black !important;

  width: auto;
  height: 61px;
  width: 260px;
  border-radius: 0px !important;
`;

export const MintButton = ({
  onMint,
  candyMachine,
  isMinting,
  isActive,
  isSoldOut,
}: {
  onMint: () => Promise<void>;
  candyMachine: CandyMachine | undefined;
  isMinting: boolean;
  isActive: boolean;
  isSoldOut: boolean;
}) => {
  const { requestGatewayToken, gatewayStatus } = useGateway();
  const [clicked, setClicked] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  useEffect(() => {
    setIsVerifying(false);
    if (
      gatewayStatus === GatewayStatus.COLLECTING_USER_INFORMATION &&
      clicked
    ) {
      // when user approves wallet verification txn
      setIsVerifying(true);
    } else if (gatewayStatus === GatewayStatus.ACTIVE && clicked) {
      console.log("Verified human, now minting...");
      onMint();
      setClicked(false);
    }
  }, [gatewayStatus, clicked, setClicked, onMint]);

  return (
    <CTAButton
      disabled={
        candyMachine?.state.isSoldOut ||
        isSoldOut ||
        isMinting ||
        !isActive ||
        isVerifying
      }
      onClick={async () => {
        if (
          isActive &&
          candyMachine?.state.gatekeeper &&
          gatewayStatus !== GatewayStatus.ACTIVE
        ) {
          console.log("Requesting gateway token");
          setClicked(true);
          await requestGatewayToken();
        } else {
          console.log("Minting...");
          await onMint();
        }
      }}
      variant="contained"
    >
      {!candyMachine ? (
        "CONNECTING..."
      ) : candyMachine?.state.isSoldOut || isSoldOut ? (
        "SOLD OUT"
      ) : isActive ? (
        isVerifying ? (
          "VERIFYING..."
        ) : isMinting ? (
          <CircularProgress />
        ) : (
          "MINT"
        )
      ) : candyMachine?.state.goLiveDate ? (
        "SOON"
      ) : (
        "UNAVAILABLE"
      )}
    </CTAButton>
  );
};
