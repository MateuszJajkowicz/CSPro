import asyncHandler from 'express-async-handler';
import Nade from '../models/nadeModel.js';

// @desc    Fetch all nades
// @route   GET /api/nades
// @access  Public
const getNadesByMap = asyncHandler(async (req, res) => {
  const nades = await Nade.where('map').equals(req.params.map);

  if (nades) {
    res.json(nades);
  } else {
    res.status(404).json({ message: 'Nades not found' });
  }

  // const keyword = req.query.keyword
  //   ? {
  //       name: {
  //         $regex: req.query.keyword,
  //         $options: 'i',
  //       },
  //     }
  //   : {};

  // const count = await Nade.countDocuments({ ...keyword });

  // const pageSize = Number(req.query.itemsPerPage);

  // const pages = Math.ceil(count / pageSize) || 1;

  // const page =
  //   req.query.pageNumber > pages
  //     ? pages
  //     : pageSize > count
  //     ? 1
  //     : Number(req.query.pageNumber) || 1;

  // const products = await Nade.find({ ...keyword })
  //   .limit(pageSize)
  //   .skip(count > pageSize ? pageSize * (page - 1) : 0);

  // res.json({ products, page, pages });
});

export { getNadesByMap };
