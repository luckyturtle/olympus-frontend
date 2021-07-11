import { ReactComponent as ForumIcon } from "../../assets/icons/v1.2/forum.svg";
import { ReactComponent as GovIcon } from "../../assets/icons/v1.2/governance.svg";
import { ReactComponent as DocsIcon } from "../../assets/icons/v1.2/docs.svg";
import { SvgIcon } from "@material-ui/core";

const externalUrls = [
  {
    title: "Forum",
    url: "https://forum.olympusdao.finance/",
    icon: <SvgIcon color="primary" component={ForumIcon} />,
  },
  {
    title: "Governance",
    url: "https://vote.olympusdao.finance/",
    icon: <SvgIcon color="primary" component={GovIcon} />,
  },
  {
    title: "Docs",
    url: "https://docs.olympusdao.finance/",
    icon: <SvgIcon color="primary" component={DocsIcon} />,
  },
];

export default externalUrls;
