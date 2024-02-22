# FE Study : react01
> car list 

## application 사양
DB(Oracle cloud, 19c)
Springboot 3
JAVA 17

주제: 자동차 목록
Rest API를 이용한 간단한 CRUD 기능 게시판

|구성|배포|
|---|---|
|React를 이용한 view |AWS Amplify|
|springboot를 통한 API |AWS EC2|
|oracle 19c |Oracle Cloud ATP|


## 배포과정 trouble shooting
- aws amplify 호스팅 빌드 에러 발생 <br/>
    -> AWS Amplify - 앱설정 - 빌드성정 - 앱 빌드 사양 Edit - 
- npm ci `--legacy-peer-deps`

- FE, BE 배포에서 SSL 인증서 설정
  - BE: CloudFront-(ACM)-ALB 구성
  - FE: Amplify 에서 커스텀 SSL 구성

- Route53 에서 car.weclist.com 으로 A Record 등록

- Amplify에서 SSL config 중 `In order to verify domain ownership, configure the following CNAME record associated with your domain and verify that the CNAME record exists in your Domain Name Server (DNS) file.
` 메세지 발생, Rout53 cname 직접 재구성해서 해결

- EC2에 java -jar 실행을 스크립트화해서 `nohup ... &` 로 백그라운드 데몬으로 실행