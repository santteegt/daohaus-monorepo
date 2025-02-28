import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import {
  AddressDisplay,
  ParMd,
  Link,
  Theme,
  border,
  DataIndicator,
} from '@daohaus/ui';
import {
  dynamicDecimals,
  formatShortDateTimeFromSeconds,
  formatValueTo,
  fromWei,
  Keychain,
  NETWORK_DATA,
  ValidNetwork,
} from '@daohaus/common-utilities';

import { TProposals } from '@daohaus/dao-context';
import { ProposalWarning } from './ProposalWarning';

const OverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.2rem;
  width: 100%;
  padding: 2.8rem 3.6rem;

  border-radius: ${border.radius};
  border: 1px ${({ theme }: { theme: Theme }) => theme.card.border} solid;
  background-color: ${({ theme }: { theme: Theme }) => theme.card.hoverBg};
`;

const DataContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 3rem;
`;

const SpacedAddressDisplay = styled(AddressDisplay)`
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const Spacer = styled.div`
  margin-bottom: 2rem;
`;

type ProposalDetailsGutsProps = {
  proposal: TProposals[number];
};

export const ProposalDetailsGuts = ({ proposal }: ProposalDetailsGutsProps) => {
  const { daochain } = useParams();

  return (
    <OverviewContainer>
      <ParMd>{proposal.description}</ParMd>
      {proposal.contentURI && (
        <Link href={proposal.contentURI} linkType="external">
          Link
        </Link>
      )}
      <DataContainer>
        <div>
          <ParMd>Submitted by</ParMd>
          <SpacedAddressDisplay
            truncate
            address={proposal.createdBy}
            copy
            explorerNetworkId={daochain as keyof Keychain}
          />
        </div>
        <DataIndicator
          label="Expiration Date"
          data={
            Number(proposal.expiration)
              ? formatShortDateTimeFromSeconds(proposal.expiration)
              : '--'
          }
          size="sm"
        />
      </DataContainer>

      {Number(proposal.proposalOffering) > 0 && (
        <DataIndicator
          label="Proposal Offering"
          data={formatValueTo({
            value: fromWei(proposal.proposalOffering),
            format: 'number',
            unit: NETWORK_DATA[daochain as ValidNetwork]?.symbol,
            decimals: dynamicDecimals({
              baseUnits: Number(proposal.proposalOffering),
            }),
          })}
          size="sm"
        />
      )}
      <Spacer />
      <ProposalWarning
        proposalType={proposal.proposalType}
        decodeError={false}
        txHash={proposal.txHash}
      />
    </OverviewContainer>
  );
};
