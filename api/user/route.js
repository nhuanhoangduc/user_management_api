const express = require('express');
const router = express.Router();

const UserController = require('./controller');


/**
 * GET
 * List users
 */
router.get('/', UserController.getUsers);


/**
 * GET
 * One user
 */
router.get('/:id', UserController.getUser);


/**
 * POST
 * Create user
 */
router.post('/', UserController.createUser);


/**
 * PUT
 * Update user
 */
router.put('/:id', UserController.updateUser);


/**
 * DELETE
 * Update user
 */
router.delete('/:id', UserController.deleteUser);


module.exports = router;
