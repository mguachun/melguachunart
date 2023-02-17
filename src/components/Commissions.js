import React from "react";
import styles from "./Commissions.css";
import Accordion from 'react-bootstrap/Accordion';
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";

function Commissions() {
  return (
    <Accordion id='commissions'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Commission General Terms</Accordion.Header>
        <Accordion.Body>
        By commissioning me, you are agreeing to the terms of service:
        </Accordion.Body>
        <Accordion.Body>
        I. General Terms: 
        Contact me through email (via contact page or melguachunart@gmail.com) detailing your concept or idea. 
        Please include the following necessary specifications such as size, colors, 
        number of pieces, deadlines, etc. Provide neat references if possible.
        Commission completion can take anywhere from one to two weeks. (It will very likely be faster than that, 
        but I give myself extra time as a precaution).
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>II. Payment</Accordion.Header>
        <Accordion.Body>
        Do not send payment until ALL details have been discussed and you, the commissioner, have been given 
        the approval by me, the artist to do so. Commissions must pay a 50% deposit upfront. Commission will only 
        be started once the 50% deposit is received. The other 50% of the deposit should be given once the commission is 
        complete and delivered to the commissioner. Payment can be made through PayPal or Venmo. If using PayPal, please use only the "goods /services" option when sending payment. Select as "service/no address required". Do NOT send using the "family/friends/gifts" option. 
         Invoices may be used in the future by the artist. Only USD accepted.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>III. Customer Satisfaction</Accordion.Header>
        <Accordion.Body>
        Work in Progress updates will be delivered periodically to ensure the satisfaction of the commissioner. 
        WIP's might be given if I, the artist, have any confusion about the commission. Please respond accordingly 
        to such updates to maintain the deadline of the commission.After a commission is finished, only small changes are permitted such as small coloring/marking mistakes. Any great changes such as outfit change, entire color pallet revisions, 
       new pose/design, etc will come with an extra charge.Please be clear with your concept to receive the most visually accurate commission. Do not edit your commission in anyway after it has been completed and delivered unless it has 
        been approved by the artist.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>IV. Copyright/Usage Policy</Accordion.Header>
        <Accordion.Body>
        Work in Progress updates will be delivered periodically to ensure the satisfaction of the commissioner. 
        WIP's might be given if I, the artist, have any confusion about the commission. Please respond accordingly 
        to such updates to maintain the deadline of the commission. After a commission is finished, only small changes are permitted such as small coloring/marking mistakes. Any great changes such as outfit change, entire color pallet revisions, 
       new pose/design, etc will come with an extra charge.Please be clear with your concept to receive the most visually accurate commission. Do not edit your commission in anyway after it has been completed and delivered unless it has 
        been approved by the artist.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>V. Canceling/Refund Policy</Accordion.Header>
        <Accordion.Body>
        I, the artist, hold every right to the produced drawing, not the commissioner. 
        Therefore I am allowed to use the copyrighted artwork to: Promote myself within 
        any social platform (This does not mean I can use your commission to make money or 
        profit off of it by making it into merchandise);  To display or post it anywhere to my liking; 
        Watermark/signature is mandatory and will not be removed;
        </Accordion.Body>
        <Accordion.Body>
        <AccordionHeader>The following is considered copyright infringement:</AccordionHeader>
        I, the artist, hold every right to the produced drawing, not the commissioner. 
        Therefore I am allowed to use the copyrighted artwork to: Promote myself within 
        any social platform (This does not mean I can use your commission to make money or 
        profit off of it by making it into merchandise);  To display or post it anywhere to my liking; 
        Watermark/signature is mandatory and will not be removed; Removing any watermarks/signatures; 
        Altering the artwork without my, the artist's consent
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Commissions;