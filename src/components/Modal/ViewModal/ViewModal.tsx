import React, {memo} from "react";
import {Button, Modal} from "react-bootstrap";
//icon
import {MdClose} from "react-icons/md";

interface IViewModal {
	show?: boolean;
	handleClose?: (flag: boolean) => void;
	title?: string;
	modalName?: string;
	children?: React.ReactNode;
	modalFooter?: React.ReactNode;
}
const ViewModal: React.FC<IViewModal> = (props) => {
	const {show = false, handleClose = () => {}, title = "", modalName = "", children = null, modalFooter = null} = props;

	return (
		<Modal className={modalName} show={show} onHide={() => handleClose(false)} size="lg" right centered>
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

export default memo(ViewModal);
