import { Box } from '@chakra-ui/react';

const StatsContainer = () => {
  return (
    <Box
      display={{ base: 'none', sm: 'none', md: 'flex' }}
      justifyContent={'center'}
      alignItems={'center'}
      transform={'translateY(-45%)'}
    >
      <Box
        width={'55%'}
        className="stats stats-vertical md:stats-horizontal shadow-md shadow-grey-200 "
      >
        <div className="stat place-items-center">
          <div className="stat-title">Customers</div>
          <div className="stat-value">91K+</div>
          <div className="stat-desc">From January 1st to December 1st</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Downloads</div>
          <div className="stat-value text-success">25k+</div>
          <div className="stat-desc text-success">↗︎ 40 (2%)</div>
        </div>

        <Box className="stat place-items-center">
          <div className="stat-title">New Registers</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↗︎ 90 (14%)</div>
        </Box>
      </Box>
    </Box>
  );
};

export default StatsContainer;
