import { t } from "@lingui/macro";
import { IconButton, Link, SvgIcon, Typography } from "@material-ui/core";
import { TokenStack } from "@olympusdao/component-library";
import { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

import { ReactComponent as SettingsIcon } from "../../assets/icons/settings.svg";
import { ReactComponent as XIcon } from "../../assets/icons/x.svg";
import useEscape from "../../hooks/useEscape";
import AdvancedSettings from "./AdvancedSettings";

function BondHeader({ bond, slippage, recipientAddress, onRecipientAddressChange, onSlippageChange }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let history = useHistory();

  useEscape(() => {
    if (open) handleClose;
    else history.push(`/bonds`);
  });

  return (
    <>
      <div className="bond-header">
        <Link component={NavLink} to="/bonds" className="cancel-bond">
          <SvgIcon color="primary" component={XIcon} />
        </Link>

        <div className="bond-header-logo">
          <TokenStack tokens={bond.bondIconSvg} />
          <div className="bond-header-name">
            <Typography variant="h5">{bond.displayName}</Typography>
          </div>
        </div>
        <div className="bond-settings">
          <IconButton onClick={handleOpen}>
            <SvgIcon color="primary" component={SettingsIcon} />
          </IconButton>
          <AdvancedSettings
            open={open}
            handleClose={handleClose}
            slippage={slippage}
            recipientAddress={recipientAddress}
            onRecipientAddressChange={onRecipientAddressChange}
            onSlippageChange={onSlippageChange}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "20px",
        }}
      >
        <Typography>{bond.fixedTerm ? t`Fixed Term` : t`Fixed Expiration`}</Typography>
        <Typography style={{ marginTop: "3px" }}>
          {bond.fixedTerm ? `${bond.duration}` : `${bond.expiration}`}
        </Typography>
      </div>
    </>
  );
}

export default BondHeader;
