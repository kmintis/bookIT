import nc from 'next-connect';
import dbConnect from "../../../../config/dbConnect";

import { allAdminRooms } from '../../../../controllers/roomControllers';
import onError from '../../../../middlewares/errors';

const handler = nc({ onError });
import { isAuthenticatedUser, authorizeRoles } from "../../../../middlewares/auth";

dbConnect();

handler
    .use(isAuthenticatedUser, authorizeRoles('admin'))
    .get(allAdminRooms);

export default handler;