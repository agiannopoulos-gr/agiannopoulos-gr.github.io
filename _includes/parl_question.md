{% case include.part %}
{% when "protocol_number" %}
Αρ.Πρωτ. : {{ include.q_proto_num }}  
**Ημερ. Καταθέσεως : {{ include.q_depo_date }}**
{:.text-right}
{% when "header" %}
ΑΘΑΝΑΣΙΟΣ Λ. ΓΙΑΝΝΟΠΟΥΛΟΣ  
ΑΝΑΠΛΗΡΩΤΗΣ ΚΑΘΗΓΗΤΗΣ ΠΑΝΕΠΙΣΤΗΜΙΟΥ ΑΘΗΝΩΝ  
ΧΕΙΡΟΥΡΓΟΣ  
ΤΟΜΕΑΡΧΗΣ ΥΓΕΙΑΣ & ΠΡΟΝΟΙΑΣ ΝΕΑΣ ΔΗΜΟΚΡΑΤΙΑΣ  
ΒΟΥΛΕΥΤΗΣ ΦΘΙΩΤΙΔΑΣ  
**Γραφείο Αθήνας : Βουλής 4 Τ.Κ. 10562 Γραφείο 408 Τηλ. 210-3706405 Fax : 210-3706005**  
**Γραφείο Λαμίας : Ρ.Φεραίου 1 Τ.Κ. 35100 Τηλ. 22310-31200/52600 Fax : 22310-66300**  
email : <script>EmailProtector.write('{{ include.q_header_email | default: "ntvna@zrq.hbn.te" }}');</script>
{% when "preamble" %}
**Προς Την Βουλή Των Ελλήνων**  
**{{ include.q_format | default: "Ερώτηση και Αίτηση Κατάθεσης Εγγράφων" }}**  
**Δια {{ include.q_to | default: "τον κ. Υπουργό Υγείας & Πρόνοιας" }}**
{:.text-{{ include.align_preamble | default: "center" }}}
{% when "closing" %}
Aθήνα, {{ include.q_date }}  
Ο Ερωτών Βουλευτής  
Αθανάσιος Λ. Γιαννόπουλος  
Βουλευτής Φθιώτιδας
{:.text-{{ include.align_closing | default: "right" }}}
{% endcase %}