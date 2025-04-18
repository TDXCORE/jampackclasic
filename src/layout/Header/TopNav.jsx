import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SimpleBar from 'simplebar-react';
import { AlignLeft, Bell, Calendar, CheckSquare, Clock, CreditCard, Inbox, Plus, Search, Settings, Tag } from 'react-feather';
import { Button, Container, Dropdown, Form, InputGroup, Nav, Navbar } from 'react-bootstrap';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import HkBadge from '@/components/@hk-badge/@hk-badge';
import { useGlobalStateContext } from '@/context/GolobalStateProvider';

//Images
import avatar2 from '@/assets/img/avatar2.jpg';
import avatar3 from '@/assets/img/avatar3.jpg';
import avatar4 from '@/assets/img/avatar4.jpg';
import avatar10 from '@/assets/img/avatar10.jpg';
import avatar12 from '@/assets/img/avatar12.jpg';


const TopNav = () => {

    const { states, dispatch } = useGlobalStateContext();
    const [showDropdown, setShowDropdown] = useState(false);
    const [searchValue, setSearchValue] = useState("")

    const CloseSearchInput = () => {
        setSearchValue("");
        setShowDropdown(false);
    }

    const pageVariants = {
        initial: {
            opacity: 0,
            y: 10
        },
        open: {
            opacity: 1,
            y: 0
        },
        close: {
            opacity: 0,
            y: 10
        }
    };



    return (
        <Navbar expand="xl" className="hk-navbar navbar-light fixed-top" >
            <Container fluid>
                {/* Start Nav */}
                <div className="nav-start-wrap">
                    <Button variant="flush-dark" onClick={() => dispatch({ type: 'sidebar_toggle', sidebarCollapse: !states.sidebarCollapse })} className="btn-icon btn-rounded flush-soft-hover navbar-toggle d-xl-none">
                        <span className="icon">
                            <span className="feather-icon"><AlignLeft /></span>
                        </span>
                    </Button>
                    {/* Search */}
                    <Dropdown as={Form} className="navbar-search" show={showDropdown} autoClose={() => setShowDropdown(!showDropdown)} >
                        <Dropdown.Toggle as="div" className="no-caret bg-transparent">
                            <Button variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover  d-xl-none" onClick={() => setShowDropdown(!showDropdown)} >
                                <span className="icon">
                                    <span className="feather-icon"><Search /></span>
                                </span>
                            </Button>
                            <InputGroup className="d-xl-flex d-none">
                                <span className="input-affix-wrapper input-search affix-border">
                                    <Form.Control type="text" className="bg-transparent" data-navbar-search-close="false" placeholder="Search..." aria-label="Search" onFocus={() => setShowDropdown(true)} onBlur={() => setShowDropdown(false)} value={searchValue} onChange={e => setSearchValue(e.target.value)} />
                                    <span className="input-suffix" onClick={() => setSearchValue("")} >
                                        <span>/</span>
                                        <span className="btn-input-clear">
                                            <i className="bi bi-x-circle-fill" />
                                        </span>
                                        <span className="spinner-border spinner-border-sm input-loader text-primary" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </span>
                                    </span>
                                </span>
                            </InputGroup>
                        </Dropdown.Toggle>
                        <Dropdown.Menu as={motion.div}
                            initial="initial"
                            animate={showDropdown ? "open" : "close"}
                            variants={pageVariants}
                            transition={{ duration: 0.3 }}
                            className={classNames("p-0")}
                        >
                            {/* Mobile Search */}
                            <Dropdown.Item className="d-xl-none bg-transparent">
                                <InputGroup className="mobile-search">
                                    <span className="input-affix-wrapper input-search">
                                        <Form.Control type="text" placeholder="Search..." aria-label="Search" value={searchValue} onChange={e => setSearchValue(e.target.value)} onFocus={() => setShowDropdown(true)} autoFocus />
                                        <span className="input-suffix" onClick={CloseSearchInput} >
                                            <span className="btn-input-clear">
                                                <i className="bi bi-x-circle-fill" />
                                            </span>
                                            <span className="spinner-border spinner-border-sm input-loader text-primary" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </span>
                                        </span>
                                    </span>
                                </InputGroup>
                            </Dropdown.Item>
                            {/*/ Mobile Search */}
                            <SimpleBar className="dropdown-body p-2">
                                <Dropdown.Header>Recent Search</Dropdown.Header>
                                <Dropdown.Item className="bg-transparent">
                                    <HkBadge bg="secondary" soft pill className="me-1" >React</HkBadge>
                                    <HkBadge bg="secondary" soft pill className="me-1" >Node JS</HkBadge>
                                    <HkBadge bg="secondary" soft pill>SCSS</HkBadge>
                                </Dropdown.Item>
                                <Dropdown.Divider as="div" />
                                <Dropdown.Header>Help</Dropdown.Header>
                                <Dropdown.Item href="#">
                                    <div className="media align-items-center">
                                        <div className="media-head me-2">
                                            <div className="avatar avatar-icon avatar-xs avatar-soft-light avatar-rounded">
                                                <span className="initial-wrap">
                                                    <span className="svg-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-corner-down-right" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                            <path d="M6 6v6a3 3 0 0 0 3 3h10l-4 -4m0 8l4 -4" />
                                                        </svg>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="media-body">
                                            How to setup theme?
                                        </div>
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    <div className="media align-items-center">
                                        <div className="media-head me-2">
                                            <div className="avatar avatar-icon avatar-xs avatar-soft-light avatar-rounded">
                                                <span className="initial-wrap">
                                                    <span className="svg-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-corner-down-right" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                            <path d="M6 6v6a3 3 0 0 0 3 3h10l-4 -4m0 8l4 -4" />
                                                        </svg>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="media-body">
                                            View detail documentation
                                        </div>
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Divider as="div" />
                                <Dropdown.Header>Users</Dropdown.Header>
                                <Dropdown.Item href="#">
                                    <div className="media align-items-center">
                                        <div className="media-head me-2">
                                            <div className="avatar avatar-xs avatar-rounded">
                                                <Image src={avatar3} alt="user" className="avatar-img" />
                                            </div>
                                        </div>
                                        <div className="media-body">
                                            Sarah Jone
                                        </div>
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    <div className="media align-items-center">
                                        <div className="media-head me-2">
                                            <div className="avatar avatar-xs avatar-soft-primary avatar-rounded">
                                                <span className="initial-wrap">J</span>
                                            </div>
                                        </div>
                                        <div className="media-body">
                                            Joe Jackson
                                        </div>
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    <div className="media align-items-center">
                                        <div className="media-head me-2">
                                            <div className="avatar avatar-xs avatar-rounded">
                                                <Image src={avatar4} alt="user" className="avatar-img" />
                                            </div>
                                        </div>
                                        <div className="media-body">
                                            Maria Richard
                                        </div>
                                    </div>
                                </Dropdown.Item>
                            </SimpleBar>
                            <div className="dropdown-footer d-xl-flex d-none">
                                <Link href="#">
                                    <u>Search all</u>
                                </Link>
                            </div>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                {/* /Start Nav */}
                {/* End Nav */}
                <div className="nav-end-wrap">
                    <Nav className="navbar-nav flex-row">
                        <Nav.Item>
                            <Button as={Link} variant="flush-dark" href="/apps/email" className="btn-icon btn-rounded flush-soft-hover">
                                <span className="icon">
                                    <span className=" position-relative">
                                        <span className="feather-icon"><Inbox /></span>
                                        <HkBadge bg="primary" soft pill size="sm" className="position-top-end-overflow-1" >4</HkBadge>
                                    </span>
                                </span>
                            </Button>
                        </Nav.Item>
                        <Nav.Item>
                            <Dropdown className="dropdown-notifications">
                                <Dropdown.Toggle variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover no-caret">
                                    <span className="icon">
                                        <span className="position-relative">
                                            <span className="feather-icon"><Bell /></span>
                                            <HkBadge bg="success" indicator className="position-top-end-overflow-1" />
                                        </span>
                                    </span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu align="end" className="p-0">
                                    <Dropdown.Header className="px-4 fs-6">
                                        Notifications
                                        <Button variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover">
                                            <span className="icon">
                                                <span className="feather-icon"><Settings /></span>
                                            </span>
                                        </Button>
                                    </Dropdown.Header>
                                    <SimpleBar className="dropdown-body  p-2">
                                        <Dropdown.Item>
                                            <div className="media">
                                                <div className="media-head">
                                                    <div className="avatar avatar-rounded avatar-sm">
                                                        <Image src={avatar2} alt="user" className="avatar-img" />
                                                    </div>
                                                </div>
                                                <div className="media-body">
                                                    <div>
                                                        <div className="notifications-text">Morgan Freeman accepted your invitation to join the team</div>
                                                        <div className="notifications-info">
                                                            <HkBadge bg="success" soft >Collaboration</HkBadge>
                                                            <div className="notifications-time">Today, 10:14 PM</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <div className="media">
                                                <div className="media-head">
                                                    <div className="avatar  avatar-icon avatar-sm avatar-success avatar-rounded">
                                                        <span className="initial-wrap">
                                                            <span className="feather-icon"><Inbox /> </span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="media-body">
                                                    <div>
                                                        <div className="notifications-text">New message received from Alan Rickman</div>
                                                        <div className="notifications-info">
                                                            <div className="notifications-time">Today, 7:51 AM</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <div className="media">
                                                <div className="media-head">
                                                    <div className="avatar  avatar-icon avatar-sm avatar-pink avatar-rounded">
                                                        <span className="initial-wrap">
                                                            <span className="feather-icon"><Clock /></span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="media-body">
                                                    <div>
                                                        <div className="notifications-text">You have a follow up with Jampack Head on Friday, Dec 19 at 9:30 am</div>
                                                        <div className="notifications-info">
                                                            <div className="notifications-time">Yesterday, 9:25 PM</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <div className="media">
                                                <div className="media-head">
                                                    <div className="avatar avatar-sm avatar-rounded">
                                                        <Image src={avatar3} alt="user" className="avatar-img" />
                                                    </div>
                                                </div>
                                                <div className="media-body">
                                                    <div>
                                                        <div className="notifications-text">Application of Sarah Williams is waiting for your approval</div>
                                                        <div className="notifications-info">
                                                            <div className="notifications-time">Today 10:14 PM</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <div className="media">
                                                <div className="media-head">
                                                    <div className="avatar avatar-sm avatar-rounded">
                                                        <Image src={avatar10} alt="user" className="avatar-img" />
                                                    </div>
                                                </div>
                                                <div className="media-body">
                                                    <div>
                                                        <div className="notifications-text">Winston Churchil shared a document with you</div>
                                                        <div className="notifications-info">
                                                            <HkBadge bg="violet" soft >File Manager</HkBadge>
                                                            <div className="notifications-time">2 Oct, 2021</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <div className="media">
                                                <div className="media-head">
                                                    <div className="avatar  avatar-icon avatar-sm avatar-danger avatar-rounded">
                                                        <span className="initial-wrap">
                                                            <span className="feather-icon"><Calendar /></span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="media-body">
                                                    <div>
                                                        <div className="notifications-text">Last 2 days left for the project to be completed</div>
                                                        <div className="notifications-info">
                                                            <HkBadge bg="orange" soft >Updates</HkBadge>
                                                            <div className="notifications-time">14 Sep, 2021</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Dropdown.Item>
                                    </SimpleBar>
                                    <div className="dropdown-footer">
                                        <Link href="#"><u>View all notifications</u>
                                        </Link>
                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav.Item>
                        <Nav.Item>
                            <Dropdown className="ps-2">
                                <Dropdown.Toggle as={Link} href="#" className="no-caret">
                                    <div className="avatar avatar-rounded avatar-xs">
                                        <Image src={avatar12} alt="user" className="avatar-img" />
                                    </div>
                                </Dropdown.Toggle>
                                <Dropdown.Menu align="end">
                                    <div className="p-2">
                                        <div className="media">
                                            <div className="media-head me-2">
                                                <div className="avatar avatar-primary avatar-sm avatar-rounded">
                                                    <span className="initial-wrap">Hk</span>
                                                </div>
                                            </div>
                                            <div className="media-body">
                                                <Dropdown>
                                                    <Dropdown.Toggle as="a" href="#" className="d-block fw-medium text-dark">Hencework</Dropdown.Toggle>
                                                    <Dropdown.Menu align="end">
                                                        <div className="p-2">
                                                            <div className="media align-items-center active-user mb-3">
                                                                <div className="media-head me-2">
                                                                    <div className="avatar avatar-primary avatar-xs avatar-rounded">
                                                                        <span className="initial-wrap">Hk</span>
                                                                    </div>
                                                                </div>
                                                                <div className="media-body">
                                                                    <Link href="#" className="d-flex link-dark">Hencework <i className="ri-checkbox-circle-fill fs-7 text-primary ms-1" />
                                                                    </Link>
                                                                    <Link href="#" className="d-block fs-8 link-secondary">
                                                                        <u>Manage your account</u>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div className="media align-items-center mb-3">
                                                                <div className="media-head me-2">
                                                                    <div className="avatar avatar-xs avatar-rounded">
                                                                        <Image src={avatar12} alt="user" className="avatar-img" />
                                                                    </div>
                                                                </div>
                                                                <div className="media-body">
                                                                    <Link href="#" className="d-block link-dark">Jampack Team</Link>
                                                                    <Link href="#" className="d-block fs-8 link-secondary">contact@hencework.com</Link>
                                                                </div>
                                                            </div>
                                                            <Button variant="outline-light" size="sm" className="btn-block">
                                                                <span>
                                                                    <span className="icon">
                                                                        <span className="feather-icon">
                                                                            <Plus />
                                                                        </span>
                                                                    </span>
                                                                    <span>Add Account</span></span>
                                                            </Button>
                                                        </div>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                                <div className="fs-7">contact@hencework.com</div>
                                                <Link href="#" className="d-block fs-8 link-secondary">
                                                    <u>Sign Out</u>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <Dropdown.Divider as="div" />
                                    <Dropdown.Item as={Link} href="/profile" >Profile</Dropdown.Item>
                                    <Dropdown.Item>
                                        <span className="me-2">Offers</span>
                                        <span className="badge badge-sm badge-soft-pink">2</span>
                                    </Dropdown.Item>
                                    <Dropdown.Divider as="div" />
                                    <h6 className="dropdown-header">Manage Account</h6>
                                    <Dropdown.Item>
                                        <span className="dropdown-icon feather-icon">
                                            <CreditCard />
                                        </span>
                                        <span>Payment methods</span>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <span className="dropdown-icon feather-icon">
                                            <CheckSquare />
                                        </span>
                                        <span>Subscriptions</span>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <span className="dropdown-icon feather-icon">
                                            <Settings />
                                        </span>
                                        <span>Settings</span>
                                    </Dropdown.Item>
                                    <Dropdown.Divider as="div" />
                                    <Dropdown.Item>
                                        <span className="dropdown-icon feather-icon">
                                            <Tag />
                                        </span>
                                        <span>Raise a ticket</span>
                                    </Dropdown.Item>
                                    <Dropdown.Divider as="div" />
                                    <Dropdown.Item>
                                        Terms &amp; Conditions
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        Help &amp; Support
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav.Item>
                    </Nav>
                </div>
                {/* /End Nav */}
            </Container>
        </Navbar>
    )
}

export default TopNav;