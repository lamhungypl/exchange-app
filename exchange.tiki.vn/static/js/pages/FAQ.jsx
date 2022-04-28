import React from 'react';
import styled from 'styled-components';
import { Collapse } from 'antd';
import isEmpty from 'lodash/isEmpty';
import { useTrackingContext } from 'providers/TrackingProvider';

const { Panel } = Collapse;

const PageContainer = styled.div`
  padding: 16px 24px;
  margin: auto;
  > h1 {
    color: white;
    text-align: center;
  }
`;

const faqContents = [
  {
    title: 'Tiki Exchange là gì?',
    content: (
      <div>
        <strong>Tiki Exchange</strong> là một sàn giao dịch được Tiki lập ra
        giúp việc trao đổi giữa Astra và Tiki Xu 1 cách dễ dàng. Khách hàng của
        Tiki có sở hữu Astra sẽ được phép thực hiện việc trao đổi Astra của mình
        cho khách hàng khác của Tiki tại Tiki App.
      </div>
    ),
  },
  {
    title: 'Cách thức trao đổi Astra như thế nào?',
    content: (
      <div>
        <p>
          Astra là điểm thưởng. Việc trao đổi, chuyển nhượng Astra trên sàn giao
          dịch giữa các khách hàng tùy thuộc vào nhu cầu, ý chí của các bên tham
          gia, được thực hiện một cách minh bạch và thao tác đơn giản. Vào từng
          thời điểm của giao dịch trao đổi, chuyển nhượng các bên tham gia tự
          thỏa thuận với nhau để thống nhất và tiến hành giao dịch. Các bên tham
          gia tự chịu trách nhiệm trong các giao dịch của mình.
        </p>
        <p>
          Khách hàng của Tiki có điểm Astra muốn giao dịch có thể đặt các lệnh
          chờ mua/bán Astra, khi đặt lệnh cần chỉ định rõ số lượng điểm Astra
          muốn giao dịch/đổi sang Tiki Xu hoặc ngược lại.
        </p>
      </div>
    ),
  },
  {
    title: 'Cách thức hoạt đông của sàn giao dịch?',
    content: (
      <div>
        <p>
          Người dùng khi có tài sản bằng Astra và Xu trên Tiki có thể đặt các
          lệnh mua / bán Astra, với cách lệnh cần đặt cần chỉ định rõ giá Astra
          mong muốn mua / bán và khối lượng cần đặt. Khi có 1 lệnh khác với mức
          giá tốt hơn giá mong muốn, lệnh sẽ được khớp. Ví dụ
        </p>
        <ul>
          <li>
            Người dùng đặt mua 10 Astra với giá 100 Xu / Astra, lệnh sẽ được
            khớp nếu có người bán với giá &lt;= 100 Xu
          </li>
          <li>
            Người dùng bán 10 Astra với giá 100 Xu / Astra, lệch sẽ khớp nếu có
            người mua với giá &gt;= 100 Xu
          </li>
        </ul>
        <p>Một số lưu ý:</p>
        <ul>
          <li>Lệch sẽ vẫn mở nếu như chưa khớp hết khối lượng mong muốn.</li>
          <li>
            Người dùng có thể chủ động huỷ lệnh, khi đó thì lệch có thể chưa
            khớp hoặc đã khớp 1 phần.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Phương thức khớp lệnh?',
    content: (
      <div>
        <p>
          Các giao dịch trao đổi, chuyển nhượng Astra được hoạt động theo phương
          thức khớp lệnh liên tục, nghĩa là sau khi các giao dịch được thực hiện
          trên sàn, hệ thống sẽ so sánh khớp lệnh mua và khớp lệnh bán ngay sau
          khi lệnh được ghi nhận.
        </p>
      </div>
    ),
  },
  {
    title: 'Ai được thực hiện giao dịch?',
    content: (
      <div>
        <p>
          Tất cả người dùng có tài khoản Tiki hợp lệ, có Astra (để bán) và Tiki
          Xu (để mua) trong tài khoản.
        </p>
      </div>
    ),
  },
  {
    title: 'Các trạng thái của đơn hàng?',
    content: (
      <div>
        <p>Một đơn hàng sau khi tạo ra sẽ có các trạng thái như sau:</p>
        <ul>
          <li>
            Đang mở: đơn hàng đang mở và chờ khớp lệnh, đơn hàng có thể đã khớp
            1 phần hoặc chưa khớp.
          </li>
          <li>Đã hoàn thành: đơn hàng bị đóng sau khi khớp lệnh hoàn toàn.</li>
          <li>
            Bị huỷ: Đơn hàng bị huỷ bởi người dùng hoặc từ hệ thống, khi bị huỷ
            thì đơn hàng có thể đã khớp 1 phần hoặc chưa khớp.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Giao dịch của tôi có bị tính phí không?',
    content: (
      <div>
        <p>
          Nhằm mục đích duy trì và quản lý hoạt động sàn giao dịch Astra, Tiki
          sẽ tiến hành thu phí quản lý. Mọi giao dịch mua / bán Astra bị tính
          phí 0.1%, phí sẽ được trừ trực tiếp vào giá trị Astra / Xu sau khi
          hoàn thành
        </p>
        <ul>
          <li>
            Nếu bạn mua Astra: phí tính là 0.1% giá trị Astra nhận được sau khi
            khớp lệnh
          </li>
          <li>
            Nếu bạn bán Astra: phí tính là 0.1% giá trị Xu nhận được sau khi
            khớp lệnh.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Tôi có thể tích luỹ Astra như thế nào?',
    content: (
      <div>
        <p>Bạn có thể tích luỹ Astra thông qua các hoạt động:</p>
        <ul>
          <li>Mua hàng trên Tiki</li>
          <li>Thực hiện nhiệm vụ hàng ngày</li>
          <li>Chơi game Slot Machine và nhận thưởng may mắn</li>
          <li>Các chương trình khác được Tiki thông báo vào từng thời điểm</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Tôi có thể làm gì để có Tiki Xu?',
    content: (
      <div>
        <p>Bạn có mua phiếu quà tặng Tiki, và nạp xu theo hướng dẫn:</p>
        <ol>
          <li>Vào Tài khoản của tôi, chọn Tiki Xu</li>
          <li>Chọn Nhà cung cấp: Tiki</li>
          <li>Nhập mã phiếu quà tặng Tiki</li>
        </ol>
      </div>
    ),
  },
  {
    title: 'Tôi có thể chuyển Astra cho người khác không?',
    content: (
      <div>
        <p>
          Tiki cho phép khách hàng có Astra được tự do trao đổi số Astra mà mình
          có cho khách hàng khác của Tiki thông qua sàn giao dịch Tiki Exchange
          và theo quy định của Tiki Exchange.
        </p>
      </div>
    ),
  },
];

const FAQ = () => {
  const { track } = useTrackingContext();
  React.useEffect(() => {
    track('view_exchange_faq');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCollapse = React.useCallback(
    (collapseKey) => {
      const questionTitle = faqContents[collapseKey];
      if (!isEmpty(collapseKey)) {
        track('view_exchange_faq_answer', {
          question_display_text: questionTitle?.title,
        });
      }
    },
    [track],
  );

  return (
    <PageContainer>
      <h1>FAQ</h1>
      <Collapse accordion onChange={handleCollapse}>
        {faqContents.map(({ title, content }, index) => (
          <Panel header={title} key={index}>
            {content}
          </Panel>
        ))}
      </Collapse>
    </PageContainer>
  );
};

export default FAQ;
