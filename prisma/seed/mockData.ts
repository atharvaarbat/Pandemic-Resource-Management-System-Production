import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('4ae83aaf-884e-4aef-b0de-612dfbfa2e44', '1Lewis.Altenwerth68@hotmail.com', 'Emily Jones', 'https://i.imgur.com/YfJQV5z.png?id=3', 'abc123', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('2cfa5ca9-34ab-49e4-81d5-040462e8b95d', '8Dexter.Wiegand@yahoo.com', 'Emily Jones', 'https://i.imgur.com/YfJQV5z.png?id=10', 'def456', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('8e2cab10-0f5e-44a2-8d9c-72fee132f612', '15Hilton70@hotmail.com', 'David Wilson', 'https://i.imgur.com/YfJQV5z.png?id=17', 'jkl012', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('fbb5d626-248d-4d6c-ade1-6c7a81436bbd', '22Zechariah_Rath92@yahoo.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=24', 'jkl012', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('31a83b1d-ebbc-423c-bf0b-50f6ce766d35', '29Clementina23@gmail.com', 'David Wilson', 'https://i.imgur.com/YfJQV5z.png?id=31', 'jkl012', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('ee13007d-2de6-4db9-842f-6e3a266557b6', '36Shane_Hayes-Nicolas@gmail.com', 'David Wilson', 'https://i.imgur.com/YfJQV5z.png?id=38', 'ghi789', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('7778a1d1-2cb0-4789-bb8c-b4d3bc270912', '43Jeanie.Brakus@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=45', 'def456', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('21e2ccaa-61c8-451c-9124-5be25ce22df0', '57Wilhelm_Herman11@gmail.com', 'Emily Jones', 'https://i.imgur.com/YfJQV5z.png?id=59', 'ghi789', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('e58edcb6-6fb1-4a53-8893-c1f2cf103a3c', '64Barton80@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=66', 'def456', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('a4173a45-4d57-48f2-998a-ed1f32f2e937', 'Pinewood Community Hospital', 'https://i.imgur.com/YfJQV5z.png?id=72');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('0045dd3e-8d12-4e51-a850-069e7fefda75', 'Pinewood Community Hospital', 'https://i.imgur.com/YfJQV5z.png?id=75');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('9039a55b-3220-47d1-993c-98d665902e5f', 'Pinewood Community Hospital', 'https://i.imgur.com/YfJQV5z.png?id=78');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('65d95a2e-e220-4721-bc5f-8df772363937', 'Pinewood Community Hospital', 'https://i.imgur.com/YfJQV5z.png?id=81');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('5daf598c-d9c8-497b-8314-260691dbae78', 'Sunrise Health Clinic', 'https://i.imgur.com/YfJQV5z.png?id=84');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('50d18af3-90c1-42a4-af8b-265401c3c2e3', 'Sunrise Health Clinic', 'https://i.imgur.com/YfJQV5z.png?id=87');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('c38b5235-ace4-4444-bcdc-07319cebf45e', 'Sunrise Health Clinic', 'https://i.imgur.com/YfJQV5z.png?id=90');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('4b899321-3b02-4fb0-8a40-508b392625b1', 'Green Valley Medical Center', 'https://i.imgur.com/YfJQV5z.png?id=93');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('5a65e874-e75f-4eff-814c-7b3609e8071d', 'St. Marys Hospital', 'https://i.imgur.com/YfJQV5z.png?id=96');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('d82a80a5-2964-484b-9fdd-dd5467db721d', 'Riverbend General Hospital', 'https://i.imgur.com/YfJQV5z.png?id=99');

INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('554f9def-883a-4b59-a16a-0abcb96426fc', 'Administrator', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '65d95a2e-e220-4721-bc5f-8df772363937');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('d80ce161-f28c-4c90-8658-ad83c80f1622', 'Resource Coordinator', '4ae83aaf-884e-4aef-b0de-612dfbfa2e44', 'c38b5235-ace4-4444-bcdc-07319cebf45e');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('8bb9606e-8716-4150-b7e2-e8b7f357dbd3', 'Emergency Response Team', 'fbb5d626-248d-4d6c-ade1-6c7a81436bbd', '4b899321-3b02-4fb0-8a40-508b392625b1');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('0720134c-2f29-41fc-a3a2-6c74d69e4367', 'Inventory Manager', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'a4173a45-4d57-48f2-998a-ed1f32f2e937');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('7e852380-4fcc-45ce-b059-866dcb65de45', 'Emergency Response Team', '8e2cab10-0f5e-44a2-8d9c-72fee132f612', '65d95a2e-e220-4721-bc5f-8df772363937');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('8216f10d-9f34-43ed-a146-88f68b55f024', 'Emergency Response Team', 'ee13007d-2de6-4db9-842f-6e3a266557b6', '4b899321-3b02-4fb0-8a40-508b392625b1');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('78ef075c-a6e1-4d6e-ad2d-c0769e4d2896', 'Resource Coordinator', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '9039a55b-3220-47d1-993c-98d665902e5f');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('84f75055-c5b1-4a07-a42b-c4fe2a47fe65', 'Inventory Manager', 'ee13007d-2de6-4db9-842f-6e3a266557b6', '4b899321-3b02-4fb0-8a40-508b392625b1');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('7c386db0-0dcc-4a93-a007-818db1075c4c', 'Medical Staff', '4ae83aaf-884e-4aef-b0de-612dfbfa2e44', '4b899321-3b02-4fb0-8a40-508b392625b1');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('3ab5ba4d-e2a9-4629-ab33-20541e5c0084', 'Administrator', '2cfa5ca9-34ab-49e4-81d5-040462e8b95d', '65d95a2e-e220-4721-bc5f-8df772363937');

INSERT INTO "Hospital" ("id", "name", "address", "contactNumber", "organizationId") VALUES ('2e90719e-9ba7-4d68-ab8a-264785fac3bd', 'Riverside General Hospital', '122 136 E 13th St, New York, NY 10003', '5552345678', '5daf598c-d9c8-497b-8314-260691dbae78');
INSERT INTO "Hospital" ("id", "name", "address", "contactNumber", "organizationId") VALUES ('55e9a10e-a782-436f-be78-3546abee44f1', 'Pinewood Health Clinic', '126 42 E 20th St, New York, NY 10003', '5553456789', 'c38b5235-ace4-4444-bcdc-07319cebf45e');
INSERT INTO "Hospital" ("id", "name", "address", "contactNumber", "organizationId") VALUES ('d729b2bd-dd13-400e-b30c-23101f20cb84', 'Lakeside Community Hospital', '130 42 E 20th St, New York, NY 10003', '5553456789', 'd82a80a5-2964-484b-9fdd-dd5467db721d');
INSERT INTO "Hospital" ("id", "name", "address", "contactNumber", "organizationId") VALUES ('ecf00635-95bb-4769-8a70-163030fd1dfd', 'Riverside General Hospital', '134 91 Christopher St, New York, NY 10014', '5555678901', '0045dd3e-8d12-4e51-a850-069e7fefda75');
INSERT INTO "Hospital" ("id", "name", "address", "contactNumber", "organizationId") VALUES ('d2428ed7-27d0-4fa2-8657-8a52884ec73e', 'Lakeside Community Hospital', '138 430 Lafayette St, New York, NY 10003', '5552345678', '4b899321-3b02-4fb0-8a40-508b392625b1');
INSERT INTO "Hospital" ("id", "name", "address", "contactNumber", "organizationId") VALUES ('f6580271-95c6-4aa5-8555-baf67368c3f9', 'Lakeside Community Hospital', '142 430 Lafayette St, New York, NY 10003', '5554567890', 'a4173a45-4d57-48f2-998a-ed1f32f2e937');
INSERT INTO "Hospital" ("id", "name", "address", "contactNumber", "organizationId") VALUES ('bc3d0454-5dbc-405c-8792-1af97d0f1631', 'Green Valley Hospital', '146 443 E 6th St, New York, NY 10009', '5551234567', 'd82a80a5-2964-484b-9fdd-dd5467db721d');
INSERT INTO "Hospital" ("id", "name", "address", "contactNumber", "organizationId") VALUES ('6f1161c4-2dec-47cb-b057-765a267543c3', 'Riverside General Hospital', '150 18 W 29th St, New York, NY 10001', '5551234567', 'c38b5235-ace4-4444-bcdc-07319cebf45e');
INSERT INTO "Hospital" ("id", "name", "address", "contactNumber", "organizationId") VALUES ('2bf930fe-05d4-4f4b-b856-96a05145509d', 'Pinewood Health Clinic', '154 18 W 29th St, New York, NY 10001', '5553456789', '9039a55b-3220-47d1-993c-98d665902e5f');
INSERT INTO "Hospital" ("id", "name", "address", "contactNumber", "organizationId") VALUES ('3c1f163e-52a4-4ae5-86b3-70ac55add8e2', 'Lakeside Community Hospital', '158 18 W 29th St, New York, NY 10001', '5552345678', '65d95a2e-e220-4721-bc5f-8df772363937');

INSERT INTO "Resource" ("id", "name", "type") VALUES ('93b8ddc5-8b3d-4cf9-b6ed-414eda821a48', 'Blood Bag', 'Medical Supply');
INSERT INTO "Resource" ("id", "name", "type") VALUES ('e48cdcda-1c8f-4567-a52d-995a339c46ea', 'Blood Bag', 'Medical Device');
INSERT INTO "Resource" ("id", "name", "type") VALUES ('8debe85d-ac6b-4b59-8c4f-bf2f23cb13dc', 'Blood Bag', 'Disinfectant');
INSERT INTO "Resource" ("id", "name", "type") VALUES ('7b44713b-2eca-4f16-a7ad-34b24af39164', 'Ventilator', 'Personal Protective Equipment');
INSERT INTO "Resource" ("id", "name", "type") VALUES ('b9a27149-1751-4936-8fb9-6200718e6c72', 'Blood Bag', 'Medical Equipment');
INSERT INTO "Resource" ("id", "name", "type") VALUES ('3a26a682-048a-4f21-a735-fa698b5abfd1', 'Hand Sanitizer', 'Personal Protective Equipment');
INSERT INTO "Resource" ("id", "name", "type") VALUES ('1e16d87b-37e1-4f58-bc1b-c7a8c8cde277', 'Hand Sanitizer', 'Personal Protective Equipment');
INSERT INTO "Resource" ("id", "name", "type") VALUES ('e801752c-920d-4b00-ae9c-2c89c218ea42', 'Surgical Mask', 'Medical Equipment');
INSERT INTO "Resource" ("id", "name", "type") VALUES ('46cf3910-adb5-45c3-b465-3f2444194c7a', 'Oxygen Cylinder', 'Medical Device');
INSERT INTO "Resource" ("id", "name", "type") VALUES ('4e8d450a-1078-42cf-a194-b94b7fd7c380', 'Oxygen Cylinder', 'Medical Supply');

INSERT INTO "HospitalResource" ("id", "quantity", "lastUpdated", "hospitalId", "resourceId") VALUES ('f305e25e-e1de-4b77-9dcf-3593b5798bff', 397, '2025-05-30T18:23:08.614Z', '6f1161c4-2dec-47cb-b057-765a267543c3', '7b44713b-2eca-4f16-a7ad-34b24af39164');
INSERT INTO "HospitalResource" ("id", "quantity", "lastUpdated", "hospitalId", "resourceId") VALUES ('1d08df6d-8509-4f1d-93bd-20967ffce05f', 224, '2024-07-30T21:19:45.620Z', '55e9a10e-a782-436f-be78-3546abee44f1', '3a26a682-048a-4f21-a735-fa698b5abfd1');
INSERT INTO "HospitalResource" ("id", "quantity", "lastUpdated", "hospitalId", "resourceId") VALUES ('f78e61a7-99a4-428c-9d05-07204f395810', 457, '2024-01-21T06:39:29.887Z', 'd729b2bd-dd13-400e-b30c-23101f20cb84', '7b44713b-2eca-4f16-a7ad-34b24af39164');
INSERT INTO "HospitalResource" ("id", "quantity", "lastUpdated", "hospitalId", "resourceId") VALUES ('b467326a-3572-45c5-a26c-ccc490296aa9', 215, '2024-09-19T01:26:40.352Z', 'f6580271-95c6-4aa5-8555-baf67368c3f9', '3a26a682-048a-4f21-a735-fa698b5abfd1');
INSERT INTO "HospitalResource" ("id", "quantity", "lastUpdated", "hospitalId", "resourceId") VALUES ('39ae167d-eedf-4c3a-89d9-faa8efdc0f8b', 692, '2025-08-20T05:54:37.319Z', 'bc3d0454-5dbc-405c-8792-1af97d0f1631', '1e16d87b-37e1-4f58-bc1b-c7a8c8cde277');
INSERT INTO "HospitalResource" ("id", "quantity", "lastUpdated", "hospitalId", "resourceId") VALUES ('588c4dac-0323-438c-af25-354ed3a29dc1', 46, '2025-01-24T19:38:26.032Z', 'f6580271-95c6-4aa5-8555-baf67368c3f9', '46cf3910-adb5-45c3-b465-3f2444194c7a');
INSERT INTO "HospitalResource" ("id", "quantity", "lastUpdated", "hospitalId", "resourceId") VALUES ('aa17a54e-5eb3-4577-b9fe-8c4dce0d6b6c', 67, '2024-11-19T20:38:23.905Z', 'ecf00635-95bb-4769-8a70-163030fd1dfd', '8debe85d-ac6b-4b59-8c4f-bf2f23cb13dc');
INSERT INTO "HospitalResource" ("id", "quantity", "lastUpdated", "hospitalId", "resourceId") VALUES ('0504175e-971e-4a89-b010-f8c48fc89ba3', 111, '2024-10-23T22:09:34.555Z', 'f6580271-95c6-4aa5-8555-baf67368c3f9', '46cf3910-adb5-45c3-b465-3f2444194c7a');
INSERT INTO "HospitalResource" ("id", "quantity", "lastUpdated", "hospitalId", "resourceId") VALUES ('fe58a81b-10d9-42f8-9a4e-c88680ce4948', 307, '2023-09-28T13:09:26.651Z', '3c1f163e-52a4-4ae5-86b3-70ac55add8e2', 'e801752c-920d-4b00-ae9c-2c89c218ea42');
INSERT INTO "HospitalResource" ("id", "quantity", "lastUpdated", "hospitalId", "resourceId") VALUES ('4bf3492e-2774-4356-b66d-f42709bc32ea', 356, '2025-06-20T01:38:24.412Z', 'bc3d0454-5dbc-405c-8792-1af97d0f1631', '93b8ddc5-8b3d-4cf9-b6ed-414eda821a48');

INSERT INTO "Allocation" ("id", "allocatedQuantity", "allocationDate", "hospitalId", "resourceId") VALUES ('8d5fa727-96af-42ff-9a1c-3b760884d440', 385, '2024-07-13T16:31:41.167Z', 'd2428ed7-27d0-4fa2-8657-8a52884ec73e', '1e16d87b-37e1-4f58-bc1b-c7a8c8cde277');
INSERT INTO "Allocation" ("id", "allocatedQuantity", "allocationDate", "hospitalId", "resourceId") VALUES ('ee0f15f0-5a21-427c-8892-e34576e06ba2', 751, '2024-04-17T11:28:56.563Z', 'd2428ed7-27d0-4fa2-8657-8a52884ec73e', '1e16d87b-37e1-4f58-bc1b-c7a8c8cde277');
INSERT INTO "Allocation" ("id", "allocatedQuantity", "allocationDate", "hospitalId", "resourceId") VALUES ('ea9b4324-4d24-42d4-be15-16217b12e43b', 569, '2024-11-04T06:58:12.432Z', 'ecf00635-95bb-4769-8a70-163030fd1dfd', 'e48cdcda-1c8f-4567-a52d-995a339c46ea');
INSERT INTO "Allocation" ("id", "allocatedQuantity", "allocationDate", "hospitalId", "resourceId") VALUES ('081fd72b-ea05-4c2c-bd62-a007cff304e6', 584, '2025-03-09T22:45:03.152Z', '55e9a10e-a782-436f-be78-3546abee44f1', '8debe85d-ac6b-4b59-8c4f-bf2f23cb13dc');
INSERT INTO "Allocation" ("id", "allocatedQuantity", "allocationDate", "hospitalId", "resourceId") VALUES ('be8494bd-0ab6-4f87-b691-2818694b18a1', 707, '2024-10-11T21:35:03.959Z', 'bc3d0454-5dbc-405c-8792-1af97d0f1631', '4e8d450a-1078-42cf-a194-b94b7fd7c380');
INSERT INTO "Allocation" ("id", "allocatedQuantity", "allocationDate", "hospitalId", "resourceId") VALUES ('d52a839d-9dc8-4110-a364-8eba1efaef26', 862, '2024-08-02T22:28:45.664Z', 'ecf00635-95bb-4769-8a70-163030fd1dfd', '46cf3910-adb5-45c3-b465-3f2444194c7a');
INSERT INTO "Allocation" ("id", "allocatedQuantity", "allocationDate", "hospitalId", "resourceId") VALUES ('4328776b-4b06-4ce4-bf0b-ed9ff100dcd5', 714, '2025-04-24T16:09:26.608Z', '55e9a10e-a782-436f-be78-3546abee44f1', '93b8ddc5-8b3d-4cf9-b6ed-414eda821a48');
INSERT INTO "Allocation" ("id", "allocatedQuantity", "allocationDate", "hospitalId", "resourceId") VALUES ('160ad695-ccb8-4251-981a-86ab3f95a0a6', 806, '2023-12-02T10:53:08.114Z', 'ecf00635-95bb-4769-8a70-163030fd1dfd', '4e8d450a-1078-42cf-a194-b94b7fd7c380');
INSERT INTO "Allocation" ("id", "allocatedQuantity", "allocationDate", "hospitalId", "resourceId") VALUES ('ccffb041-e764-4e12-a85c-a34680c63eb9', 821, '2025-07-15T15:05:30.052Z', '55e9a10e-a782-436f-be78-3546abee44f1', 'b9a27149-1751-4936-8fb9-6200718e6c72');
INSERT INTO "Allocation" ("id", "allocatedQuantity", "allocationDate", "hospitalId", "resourceId") VALUES ('38adc4c5-5c1d-4ef1-8191-32106b4aaa66', 920, '2023-09-26T20:21:01.770Z', '2bf930fe-05d4-4f4b-b856-96a05145509d', '1e16d87b-37e1-4f58-bc1b-c7a8c8cde277');

INSERT INTO "PandemicCase" ("id", "numberOfCases", "reportDate", "hospitalId") VALUES ('0d83816a-800c-4e8c-bdfd-6e827406c0b5', 753, '2024-04-21T03:21:50.739Z', 'd2428ed7-27d0-4fa2-8657-8a52884ec73e');
INSERT INTO "PandemicCase" ("id", "numberOfCases", "reportDate", "hospitalId") VALUES ('82ab2edc-f124-4cbc-ae33-a15147098d65', 427, '2024-01-21T18:24:49.350Z', 'ecf00635-95bb-4769-8a70-163030fd1dfd');
INSERT INTO "PandemicCase" ("id", "numberOfCases", "reportDate", "hospitalId") VALUES ('47ff8235-da57-4565-924d-27271c793ada', 58, '2024-08-21T12:35:09.568Z', 'f6580271-95c6-4aa5-8555-baf67368c3f9');
INSERT INTO "PandemicCase" ("id", "numberOfCases", "reportDate", "hospitalId") VALUES ('00ee866c-620b-4b9a-88be-0b1e1ccee58f', 681, '2024-02-05T19:58:58.975Z', 'ecf00635-95bb-4769-8a70-163030fd1dfd');
INSERT INTO "PandemicCase" ("id", "numberOfCases", "reportDate", "hospitalId") VALUES ('6da36525-9ed4-475b-b11d-aef2299347a4', 223, '2024-07-06T23:52:19.726Z', 'ecf00635-95bb-4769-8a70-163030fd1dfd');
INSERT INTO "PandemicCase" ("id", "numberOfCases", "reportDate", "hospitalId") VALUES ('d5c36765-600f-45d5-86d8-cced4098e114', 33, '2024-07-27T13:03:54.128Z', 'f6580271-95c6-4aa5-8555-baf67368c3f9');
INSERT INTO "PandemicCase" ("id", "numberOfCases", "reportDate", "hospitalId") VALUES ('b2041065-5526-4bb2-81cb-c4a0727d139b', 520, '2023-11-03T03:26:45.035Z', '55e9a10e-a782-436f-be78-3546abee44f1');
INSERT INTO "PandemicCase" ("id", "numberOfCases", "reportDate", "hospitalId") VALUES ('88a5d902-7e91-4448-88e0-672b61969d13', 526, '2025-02-22T20:14:32.534Z', 'f6580271-95c6-4aa5-8555-baf67368c3f9');
INSERT INTO "PandemicCase" ("id", "numberOfCases", "reportDate", "hospitalId") VALUES ('badbeac7-9995-4b58-a643-3194627b4d16', 409, '2024-01-13T05:42:17.760Z', 'ecf00635-95bb-4769-8a70-163030fd1dfd');
INSERT INTO "PandemicCase" ("id", "numberOfCases", "reportDate", "hospitalId") VALUES ('7cb0dc7a-bad0-41ba-8356-5326e5ea7dc7', 246, '2024-02-14T14:55:59.027Z', 'd2428ed7-27d0-4fa2-8657-8a52884ec73e');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
