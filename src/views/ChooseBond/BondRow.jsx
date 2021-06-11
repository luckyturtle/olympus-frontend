import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { trim, bondName, lpURL, isBondLP } from "../../helpers";
import BondLogo from '../../components/BondLogo';
import { TableRow, TableCell, } from "@material-ui/core";
import { NavLink } from 'react-router-dom';



export function BondCardData({ bond }) {
  const bondPrice    = useSelector((state ) => { return state.bonding[bond] && state.bonding[bond].bondPrice });
  const bondDiscount = useSelector((state ) => { return state.bonding[bond] && state.bonding[bond].bondDiscount });

  return (
    <div className="bond-data-card">
      <div className="bond-pair">
        {/* maket this whole thing a link if there is an lpurl */}
        <BondLogo bond={bond} />
        <div className="bond-name">
          {bondName(bond)}
          {isBondLP(bond) && <a href={lpURL(bond)} target="_blank">
            <i className="fas fa-external-link-alt"></i>
          </a>}
        </div>
      </div>
      
      <div className="bond-price">
        <p>Bond Price</p>
        {trim(bondPrice, 2)}
      </div>

      <div className="bond-discount">
        <p>Discount</p>
        {trim(bondDiscount * 100, 2)}
      </div>
      
      {/* <TableCell>$4,102,030</TableCell> */}
      
      <NavLink to={`/bonds/${bond}`}>
        <button 
          type="button" 
          className="stake-lp-button ohm-btn"
        >
          Bond
        </button>
      </NavLink>
    </div>
  )
}


export function BondTableData({bond}) {
  const bondPrice    = useSelector((state ) => { return state.bonding[bond] && state.bonding[bond].bondPrice });
  const bondDiscount = useSelector((state ) => { return state.bonding[bond] && state.bonding[bond].bondDiscount });


  return (
    <TableRow>
      <TableCell align="left">
        <BondLogo bond={bond} />
        <div className="bond-name">
        {bondName(bond)}
        {isBondLP(bond) && <a href={lpURL(bond)} target="_blank">
          <p>
          Contract
          <i className="fas fa-external-link-alt"></i>
          </p>
        </a>}
        
        </div>
      </TableCell>
      <TableCell align="center">{trim(bondPrice, 2)}</TableCell>
      <TableCell>{trim(bondDiscount * 100, 2)}</TableCell>
      <TableCell>$4,102,030</TableCell>
      <TableCell align="right">
        <NavLink to={`/bonds/${bond}`}>
          <button className="stake-lp-button ohm-btn">Bond</button>
        </NavLink>
      </TableCell>
    </TableRow>
  );
}

// dont really need this anyore
export function BondHeader({ bond }) {
  const bondPrice = useSelector(state => {
    return state.bonding[bond] && state.bonding[bond].bondPrice;
  });
  const bondDiscount = useSelector(state => {
    return state.bonding[bond] && state.bonding[bond].bondDiscount;
  });

  const ohmAssetImg = () => {
    return "https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x383518188C0C6d7730D91b2c03a03C837814a899/logo.png";
  };

  const reserveAssetImg = () => {
    if (bond.indexOf("frax") >= 0) {
      return "https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x853d955aCEf822Db058eb8505911ED77F175b99e/logo.png";
    }
    if (bond.indexOf("dai") >= 0) {
      return "https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png";
    }
  };

  return (
    <li className="list-group-item d-flex align-items-center px-4">
      <div style={{ width: "80px" }}>
        <BondLogo bond={bond} />
      </div>

      <div className="text-light col-auto">
        <h4 className="mb-0 text-white">{bondName(bond)}</h4>
        {isBondLP(bond) && (
          <a href={lpURL(bond)} target="_blank" rel="noreferrer">
            Contract
            <i className="fas fa-external-link-alt fa-sm ml-1" />
          </a>
        )}
        <p className="fs-6 mb-0">Bond Price: {trim(bondPrice, 2)} DAI</p>
        <p className="fs-6">ROI: {trim(bondDiscount * 100, 2)}%</p>
      </div>

      <NavLink to={`/bonds/${bond}`} className="col text-end">
        <button className="ohm-button btn col">View</button>
      </NavLink>
    </li>
  );
}

