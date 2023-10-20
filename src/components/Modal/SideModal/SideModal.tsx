import React, { memo } from "react";
import { Button, Modal } from "react-bootstrap";
//Icons
import { MdClose } from "react-icons/md";

interface ISideModal {
	show?: boolean;
	handleClose?: (flag: boolean) => void;
	title?: string;
	modalName?: string;
	children?: React.ReactNode;
	modalFooter?: React.ReactNode;
}

const SideModal: React.FC<ISideModal> = (props) => {
	const { show = false, handleClose = () => {}, title = "", modalName = "", children = null, modalFooter = null } = props;

	return (
		<Modal className={"side-modal" + " " + modalName} show={show} onHide={() => handleClose(false)} size="sm" right>
			<Modal.Header closeButton={false}>
				<Modal.Title as={"h5"}>{title}</Modal.Title>
				<Button variant="clear" onClick={() => handleClose(false)}>
					<MdClose />
				</Button>
			</Modal.Header>
			<Modal.Body>{children}</Modal.Body>
			{modalFooter ? <Modal.Footer> {modalFooter} </Modal.Footer> : null}
		</Modal>
	);
};

export default memo(SideModal);
